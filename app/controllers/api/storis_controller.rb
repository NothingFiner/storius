class Api::StorisController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]
  def index
    @storis = Stori.all
    render :index
  end

  def show
    @stori = Stori.includes(:annotations, :comments).find(params[:id])
    render :show
  end

  def create
    @stori = Stori.new(stori_params)
    @stori.user_id = current_user.id
    if @stori.save
      render :show
    else
      render json: @stori.errors, status: 422
    end
  end

  def update
    @stori = Stori.find(params[:id])
    if @stori.update(stori_params)
      render :show
    else
      render json: @stori.errors, status: 422
    end
  end

  def destroy
    @stori = Stori.find(params[:id])
    if @stori.destroy
      render json: @stori.id
    else
      render json: @stori.errors, status: 401
    end
  end

  private
  def stori_params
    params.require(:stori).permit(:title, :photo, :author, :content, :metadata, { audio_video: [:soundcloud, :youtube] }, :tags )
  end
end
