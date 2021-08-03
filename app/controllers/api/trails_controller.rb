class Api::TrailsController < ApplicationController
    before_action :require_signed_in, only: [:create]

    def index
        @trails = Trail.all
        render "/api/trails"
        # ^^^ need to add jbuilder to the views for above render
    end

    def create
        @trail = Trail.new(trail_params)
        if @trail.save 
            # if the trail can be saved to db after all validations
            # then take user to the new trail
            # (for now, only admins can make trails)
        else
            # else send back error messages for errors slice of state
        end
    endd
    
    # -------------------------------------------------------- 

    private

    def trail_params
        params.require(:trail).permit(
            :name, :latitude, :longitude, 
            :location, :city, :state, :country, 
            :difficulty, :description, :length, 
            :gain, :type, :directions
        )
    end
    
end
