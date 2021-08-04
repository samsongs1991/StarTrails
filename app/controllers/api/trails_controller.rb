class Api::TrailsController < ApplicationController
    before_action :require_signed_in, only: [:create]

    def index
        
        puts "------------------------------------------------------"
        puts params
        puts "------------------------------------------------------"
        
        if params[:bounds]
            puts "------------------------------------------------------"
            puts "params bounds exists!!!"
            puts "------------------------------------------------------"
            # @trails = Trail.in_bounds(params[:bounds])
        else
            puts "------------------------------------------------------"
            puts "params bounds DOESNT exist"
            puts "------------------------------------------------------"
            @trails = Trail.all
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
