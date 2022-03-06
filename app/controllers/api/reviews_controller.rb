class Api::ReviewsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        @review = Review.new(review_params)
        if @review.save
            render json: @review
        else
            flash[:errors] = @review.errors.full_messages
            render json: flash[:errors]
        end
    end

    def destroy
        @review = Review.find(params[:id])
        
        if @review.delete
            render json: @review
        else

        end
    end

    def index 
        if params[:user_id]
            @reviews = User.find(params[:user_id]).reviews
        elsif params[:trail_id]
            @reviews = Trail.find(params[:trail_id]).reviews
        end
        render json: @reviews
    end

    def show
        # puts "-----------------------"
        # puts params
        # puts "-----------------------"
        # @list_trail = ListsTrail.find_by(id: params[:id])
        # if @list_trail 
        #     render :show
        # else
            
        # end
    end

    # -----------------------------------------------

    private

    def review_params
        params.require(:review).permit(:user_id, :trail_id, :body, :rating)
    end
    
    # def list_trail_params
    #     params.require(:list_trail).permit(:list_id, :trail_id)
    # end
    
end
