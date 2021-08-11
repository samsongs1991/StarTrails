class Api::ListsTrailsController < ApplicationController

    def create
        @list_trail = ListTrail.new(list_trail_params)
        if @list_trail.save

        else
            
        end
    end

    def destroy
        @list_trail = ListTrail.find_by(id: params[:id])
        @list_trail.delete
    end

    # def index 
    #     @list_trail = ListTrail.byList(params[:list_id])

    # end

    # -----------------------------------------------

    private

    def list_trail_params
        params.require(:list_trail).permit(:list_id, :trail_id)
    end
    
end
