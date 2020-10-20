class SubsController < ApplicationController
  before_action :ensure_logged_in, only: [:new, :create, :show, :edit]
  before_action :ensure_moderator, only: [:edit, :update]
  
    def new
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        @sub[:moderator_id] = params[:moderator_id]

        if @sub.save
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end 
    end

    def edit
        @sub = Sub.find_by(id: params[:id])
        render :edit
    end

    def update
        @sub = Sub.find_by(id: params[:id])

        if @sub.update_attributes(sub_params)
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    def index
        @subs = Sub.all
        render :index

    end

    def show
        @sub = Sub.find_by(id: params[:id])
        render :show
    end

    private
    def sub_params
        params.require(:sub).permit(:title, :description)
    end

    def ensure_moderator
        return if current_user.subs.find_by(id: params[:id])
    end

end
