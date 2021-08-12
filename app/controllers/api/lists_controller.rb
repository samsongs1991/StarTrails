class Api::ListsController < ApplicationController

    def index 
        @lists = List.fromUser(params[:userId])
        render :index
    end

    def create
        @list = List.new(list_params)
        if @list.save 
            render :show
        else

        end
    end

    def show
        @list = List.find_by(id: params[:id])
        if @list 
            render :show
        else

        end
    end

    def update 
        @list = List.find_by(id: params[:list][:id])
        if @list.update(edit_list_params)
            render :show
        else
            
        end    
    end

    def destroy 
        @list = List.find_by(id: params[:id])
        @list.delete
        render :show
    end

    # ------------------------------------------------------
    
    private

    def list_params
        params.require(:list).permit(:title, :user_id);
    end

    def edit_list_params 
        params.require(:list).permit(:title, :user_id);
    end
    
end
