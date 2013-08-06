class UsersController < ApplicationController

	def new

	end

	def create
		@user = User.new(params[:user])
	  respond_to do |format|
	 	  if @user.save
	 	  	session[:id] = @user.id
	 		  format.json { render json: @user.id }
	 	  else
	 	    format.json { render json: @user.errors, status: :unprocessable_entity }
	 	  end
	  end
	end

	def destroy
		
	end

end
