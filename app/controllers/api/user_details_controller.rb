class Api::UserDetailsController < ApplicationController

    def create
        @detail = User.new(detail_params)
        @detail.save 
        render "/api/user_details/show"
    end
    
    def show
        @detail = UserDetail.find_by(user_id: params[:id])
        render :show
    end

    def update
        @detail = UserDetail.find_by(user_id: params[:id])
        @detail.update
        render :show
    end

    # --------------------------------------------------------
    
    private

    def detail_params
        params.require(:user_detail).permit(
            :first_name, :last_name, :email, :about_me, 
            :city, :state, :gender, :bday
        )
    end
    
end
