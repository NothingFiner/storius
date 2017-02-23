class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comments_params)
    if @comment.save
      render :show
    else
      @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comments_params)
      render :show
    else
      @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render json: @comment.id
    else

  end

  private
  def comments_params
    params.require(:comment).permit(:stori_id, :content)
  end
end
