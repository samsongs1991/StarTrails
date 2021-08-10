class Api::ListsController < ApplicationController

    def create
        @list = List.new(list_params)
        if @list.save 
            render :show
        else
            puts "-------------------"
            puts "List did NOT save. Something went wrong."
            puts "-------------------"
        end
    end

    def show
        @list = List.find_by(id: params[:id])
        if @list 
            render :show
        else
            puts "-------------------"
            puts "List wasn't found. Something went wrong."
            puts "-------------------" 
        end
    end

    def update 
        @list = List.find_by(id: params[:list][:id])
        if @list.update(edit_list_params)
            render :show
        else
            puts "-------------------"
            puts "List wasn't updated. Something went wrong."
            puts "-------------------" 
        end    
    end

    def destroy 
        @list = List.find_by(id:params[:id])
        @list.delete
        render :show
    end

    # ------------------------------------------------------
    
    private

    def list_params
        params.require(:list).require(:title, :user_id);
    end

    def edit_list_params 
        params.require(:list).require(:title, :user_id);
    end
    
end