class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )

        if @user 
            login(@user) 
            render "/api/users/home"
        else
            render json: { signIn: ["Invalid email or password"] }, status: 401
        end
    end

    def destroy
        @user = current_user

        if @user 
            # if there's a user logged in
            # log out the current user
            logout 
        end

        # after clicking the logout button
        # reroute to home page regardless
        # only 2 cases
        #  - current_user exists => log out and go to home page
        #  - current_user doesn't exist => do nothing and go to home page
        render "/api/users/home"
    end
    
end
