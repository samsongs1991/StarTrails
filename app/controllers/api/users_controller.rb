class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            # after signing up, login
            # then reroute to home page "/"
            # except with personal greeting
            signin(@user)
            render "/api/users/show"
        else
            errors = []
            errors.push("Email already exists") if invalid_email?(params[:user][:email])
            errors.push("Password must be at least 6 characters") unless invalid_password?(params[:user][:password])
            render json: { signUp: errors }, status: 422
        end
    end

    # -------------------------------------------------------- 

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

    def invalid_email?(email)
        user = User.find_by(email: email)
        !user.nil?
    end

    def invalid_password?(password)
        password.length >= 6 ? true : false
    end
    
end
