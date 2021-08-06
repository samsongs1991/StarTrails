class Api::TrailsController < ApplicationController
    before_action :require_signed_in, only: [:create]

    def index
        if params[:bounds]
            @trails = Trail.in_bounds(params[:bounds])
            # use a class method from the model Trail
            # to only return trails based on the filters
            # the filters should be applied to the 
            # trails already fetched by Trail.in_bounds
            @trails = Trail.applyUserFilters(@trails, params)
        else
            # @trails = Trail.all
            # actually, i don't think i will ever want to fetch all trails in DB
            # it should by default fetch trails within a 10mi  radius of the user's location
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
            # if the trail can be saved to db after all validations
            # then take user to the new trail
            # (for now, only admins can make trails)

            # currently, DB is set up so all fields can be null
            # so saving a trail to the DB will never fail
            # render "/api/trails/show"
            render :show
        else
            # else send back error messages for errors slice of state
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
