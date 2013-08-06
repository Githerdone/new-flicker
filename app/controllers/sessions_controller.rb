class SessionsController < ApplicationController

  def new
  end

  def create
  	p params
  end

  def destroy
  	session.reset!
  end
end