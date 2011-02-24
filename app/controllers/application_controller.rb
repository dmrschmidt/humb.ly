class ApplicationController < ActionController::Base
  protect_from_forgery
  respond_to :js, :html
  
  protected
  
  def render_404
    render :file => "#{RAILS_ROOT}/public/404.html", :status => 404
  end
  
end
