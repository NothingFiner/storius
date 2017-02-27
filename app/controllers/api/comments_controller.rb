class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]
  def create
    @comment = Comment.new(comments_params)
    @comment.user = current_user
    if @comment.save
      render :show
    else
      render json: @comment.errors, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comments_params)
      render :show
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render json: @comment.id
    else
      render json: @comment.errors, status: 401
    end
  end

  def downvote; vote(-1); end
  def upvote; vote(1); end

  private
  def comments_params
    params.require(:comment).permit(:stori_id, :content)
  end

  def vote(direction)
    @comment = Comment.find(params[:id])
    @vote = Vote.find_by_votable(@comment, current_user.id)

    if @vote
      if @vote.status === direction
        @vote.destroy
        render json: 0
      else
        @vote.update(status: direction)
        render json: direction
      end
    else
      @comment.votes.create!(user_id: current_user.id, status: direction)
      render json: direction
    end
  end
end
