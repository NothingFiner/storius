class Api::SearchesController < ApplicationController
  def index
    # PgSearch.multisearch_options = {
    #   ignoring: :accents
    # }

    @results = PgSearch.multisearch(params[:query]).includes(:searchable).limit(10)
  end
end
