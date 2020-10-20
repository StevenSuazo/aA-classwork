class PostsController < ApplicationController

  def new
    @post = Post.new
    render :new
  end 

  def create 
    @post = Post.new(post_params)
  end

  def show
    @post = Post.find_by(:id params[:id])
    render :show
  end

  def edit 
    @post = Post.find_by(id: params[:id])
    render :edit
  end

  def update 

  end

  private 

  
end
