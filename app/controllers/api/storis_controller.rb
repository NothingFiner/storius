class Api::StorisController < ApplicationController
  def index
    @storis = Stori.all
    render :index
  end

  def show
    @stori = Stori.find(params[:id])
    render :show
  end

  def create
    @stori = Stori.new(stori_params)
    @stori.user_id = current_user.id
    if @stori.save
      render :show
    else
      render json: @stori.errors.full_messages, status: 422
    end
  end

  def update
    @stori = Stori.find(params[:id])
    debugger
    if current_user.id == @stori.user_id && @stori.update(stori_params)
      render :show
    else
      render json: @stori.errors.full_messages, status: 422
    end
  end

  private
  def stori_params
    params.require(:stori).permit(:title, :author, :content, :metadata, { audio_video: :soundcloud, :youtube }, :image_url, :header_image_url, :tags )
  end
end
