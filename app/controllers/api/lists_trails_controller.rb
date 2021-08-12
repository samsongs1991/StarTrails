class Api::ListsTrailsController < ApplicationController

    def create
        @list_trail = ListsTrail.new(list_trail_params)

        if @list_trail.save
            render :show
        else
            
        end
    end

    def destroy
        @list_trail = ListsTrail.find_by(id: params[:id])
        if @list_trail.delete
            render :show 
        else

        end
    end

    def index 
        @lists_trails = ListsTrail.byList(params[:list_id])
        if @lists_trails
            render :index
        else

        end
    end

    def show
        puts "-----------------------"
        puts params
        puts "-----------------------"
        @list_trail = ListsTrail.find_by(id: params[:id])
        if @list_trail 
            render :show
        else
            
        end
    end

    # -----------------------------------------------

    private

    def list_trail_params
        params.require(:list_trail).permit(:list_id, :trail_id)
    end
    
end
