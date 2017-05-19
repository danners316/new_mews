class UsersController < ApplicationController

  def create
    @user = User.new(params[:user])

    if request.post?
      @user = User.new(params[:user])
      if @user.save
        redirect_to root_path, :notice => "Hello #{@user.name}! Please Log In."
      else
        redirect_to root_path, :notice => 'Try another Username.'
      end

    end

  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { head :no_content }
    end
  end
end
