class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )

        if @user 
            signin(@user) 
            render "/api/users/show"
        else
            email_errors = "Email is not valid." if invalid_email?(params[:user][:email])
            password_errors = "Password must be 6 characters long." unless invalid_password?(params[:user][:password])
            render json: { email: email_errors, password: password_errors }, status: 401
        end
    end

    def destroy
        @user = current_user

        if @user 
            signout 
            render "/api/users/show"
        else
            render json: { signout: "Already signed out." }, status: 404
        end
    end
    
    # -------------------------------------------------------- 

    private

    def invalid_email?(email)
        user = User.find_by(email: email)
        user.nil?
    end

    def invalid_password?(password)
        password.length >= 6 ? true : false
    end
    
end
