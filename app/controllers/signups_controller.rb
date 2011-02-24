class SignupsController < ApplicationController
  before_filter :authenticate!, :except => [:new, :create]
  
  # GET /signups
  # GET /signups.xml
  def index
    @signups = Signup.all
    respond_with(@signups)
  end

  # GET /signups/1
  # GET /signups/1.xml
  def show
    @signup = Signup.find(params[:id])
    respond_with(@signup)
  end

  # GET /signups/new
  # GET /signups/new.xml
  def new
    @signup = Signup.new
    respond_with(@signup)
  end

  # GET /signups/1/edit
  def edit
    @signup = Signup.find(params[:id])
  end

  # POST /signups
  # POST /signups.xml
  def create
    # sleep 1 # only for local slow-internet simulation
    @signup = Signup.new(params[:signup])
    flash[:notice] = 'Signup was successfully created.' if @signup.save
    respond_with(@signup, :layout => !request.xhr?)
  end

  # PUT /signups/1
  # PUT /signups/1.xml
  def update
    @signup = Signup.find(params[:id])
    flash[:notice] = 'Signup was successfully updated.' if @signup.update_attributes(params[:signup])
    respond_with(@signup)
  end

  # DELETE /signups/1
  # DELETE /signups/1.xml
  def destroy
    @signup = Signup.find(params[:id])
    @signup.destroy
    respond_with(@signup)
  end
  
  private
  
  def authenticate!
    session[:authenticated] ||= request.GET.include?("auth_me")
    render_404 unless session[:authenticated]
  end
end
