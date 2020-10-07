class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
        # user = User.new(params.require(:user).permit(:name, :email))
        # replace the `user_attributes_here` with the actual attribute keys
        # user = {name: "Steve", email: "steve@aa.edu"}
        # user = User.new(name: "Steve", email: "steve@aa.edu")
        # debugger
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        if user.update(user_params)
            # render json: user
            redirect_to user_url(user)
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def destroy
        user = User.find(params[:id])
        if user.destroy
            # render json: user
            redirect_to users_url
        else
            render json: user.errors.full_messages, status: 422
        end
    end

# private
    def user_params
       params.require(:user).permit(:name, :email) 
    end
end