class Api::AnnotationsController < ApplicationController
  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.user = current_user
    @annotation.stori_id = params[:stori_id]
    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def update
    @annotation = Annotation.find(params[:id])
    if @annotation.update(annotation_params)
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def show
    @annotation = Annotation.find(params[:id])
    render :show
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    if @annotation.destroy
      render json: @annotation.id
    else
      render json: @annotation.errors.full_messages, status: 401
    end
  end
  
  private
  def annotation_params
    params.require(:annotation).permit(:start_idx, :length, :content)
  end
end
