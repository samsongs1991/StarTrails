class Api::ReviewsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        @review = Review.new(review_params)
        # if @review.save
        #     puts "--------------------------------"   
        #     puts "SUCCESSFUL SAVE OF REVIEW"
        #     puts "--------------------------------"   
        # else
        #     puts "--------------------------------"   
        #     puts "FLASH ERRORS BELOW"         
        #     puts flash.errors
        #     puts "--------------------------------"            
        # end
        render json: "REVIEW CREATE FIRED"
    end

    def destroy
        render json: "REVIEW DESTROY FIRED"
        # @list_trail = ListsTrail.find_by(id: params[:id])

        # if @list_trail.delete

        #     puts "-------------------------"
        #     puts "RELATION DESTROYED"
        #     puts "-------------------------"

        #     render :show 
        # else

        # end
    end

    def index 
        render json: "REVIEW INDEX FIRED"
        # @lists_trails = ListsTrail.byList(params[:listId])

        # if @lists_trails
        #     render :index
        # else

        # end
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
