class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            # after signing up, login
            # then reroute to home page "/"
            # except with personal greeting
            login(@user)
            render "/api/users/home"
        else
            render json: { signUp: ["Invalid email or password"] }, status: 422
        end
    end

    # -------------------------------------------------------- 

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
    
end
