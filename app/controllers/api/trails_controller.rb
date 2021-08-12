class Api::TrailsController < ApplicationController
    # before_action :require_signed_in, only: [:create]
    # ^^^ currently commented out b/c a user will not be able
    # to create their own trails yet. too advanced for now

    def index
        if params[:bounds]
            @trails = Trail.in_bounds(params[:bounds])
            if params[:difficulty]
                @trails = Trail.applyUserFilters(@trails, params)
            end
        else

        end
        render :index
    end

    def show
        @trail = Trail.find_by(id: params[:id])
        render :show
    end

    def create
        @trail = Trail.new(trail_params)
        if @trail.save
            render :show
        else

        end
    end
    
    # -------------------------------------------------------- 

    private

    def trail_params
        params.require(:trail).permit(
            :name, :latitude, :longitude, 
            :location, :city, :state, :country, 
            :difficulty, :description, :length, 
            :gain, :category, :directions
        )
    end
    
end
