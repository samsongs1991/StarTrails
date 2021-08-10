class Api::UsersController < ApplicationController

    def index
        @users = User.limit(50)
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)

        if @user.save
            signin(@user)
            render :show
        else
            email_errors = "Email is not valid." if invalid_email?(params[:user][:email])
            email_errors = "Email already exists." if email_already_exists?(params[:user][:email])
            password_errors = "Password must be 6 characters long." unless invalid_password?(params[:user][:password])
            render json: { email: email_errors, password: password_errors }, status: 422            
        end
    end

    def update 
        @user = User.find_by(id: params[:id])
        if @user.update(edit_user_params)
            render :show
        else
            puts "------------------------------------------"
            puts "ERROR IN UPDATE METHOD OF USERS CONTROLLER"
            puts "------------------------------------------"
        end
    end

    # -------------------------------------------------------- 

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

    # CREATE A EDIT_USER_PARAMS FOR THE UPDATE METHOD
    def edit_user_params 
        params.require(:user).permit(
            :email, :first_name, :last_name, :about_me, 
            :city, :state, :gender, :bday
        )
    end

    def invalid_email?(email)
        return true if email.length <=0 || !email.include?("@") || !email.include?(".")
    end

    def email_already_exists?(email)
        user = User.find_by(email: email)
        !user.nil?
    end

    def invalid_password?(password)
        password.length >= 6 ? true : false
    end
    
end
