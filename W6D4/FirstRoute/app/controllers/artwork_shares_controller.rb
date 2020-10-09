class ArtworkSharesController < ApplicationController
    def create
        # artwork = artwork.new(params.require(:artwork).permit(:name, :email))
        # replace the `artwork_attributes_here` with the actual attribute keys
        # artwork = {name: "Steve", email: "steve@aa.edu"}
        # artwork = artwork.new(name: "Steve", email: "steve@aa.edu")
        
        artwork_share = ArtworkShare.new(artwork_params)
        if artwork_share.save
            render json: artwork_share
        else
            render json: artwork_share.errors.full_messages, status: 422
        end
    end

    def destroy
        # debugger
        artwork_share = ArtworkShare.find(params[:id])
        artwork_share.destroy
        render json: artwork_share
            # redirect_to artworks_url
        # else
        #     render json: artwork.errors.full_messages, status: 422
        # end
    end

# private
    def artwork_params
       params.require(:artwork_share).permit(:artwork_id, :viewer_id) 
    end
end