class UsersController < ApplicationController
    before_action :ensure_logged_in, only: [:show, :index, :edit, :update]

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            redirect_to user_url(@user)
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    # def destroy
        
    # end

    def edit
        @user = User.find_by(id: params[:id])
        render :edit
    end

    def update
        @user = User.find_by(id: params[:id])

        if @user.update_attributes(user_params)
            redirect_to user_url(@user)
        else
            flash.now[:errors] = @user.errors.full_messages
            render :edit
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def index
        @users = User.all
        render :index
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end
