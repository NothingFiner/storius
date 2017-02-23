class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]
  def create
    @comment = Comment.new(comments_params)
    @comment.user = current_user
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comments_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render json: @comment.id
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  private
  def comments_params
    params.require(:comment).permit(:stori_id, :content)
  end
end
