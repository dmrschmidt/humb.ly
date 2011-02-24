require "spec_helper"

describe SignupsController do
  describe "routing" do

    it "recognizes and generates #index" do
      { :get => "/signups" }.should route_to(:controller => "signups", :action => "index")
    end

    it "recognizes and generates #new" do
      { :get => "/signups/new" }.should route_to(:controller => "signups", :action => "new")
    end

    it "recognizes and generates #show" do
      { :get => "/signups/1" }.should route_to(:controller => "signups", :action => "show", :id => "1")
    end

    it "recognizes and generates #edit" do
      { :get => "/signups/1/edit" }.should route_to(:controller => "signups", :action => "edit", :id => "1")
    end

    it "recognizes and generates #create" do
      { :post => "/signups" }.should route_to(:controller => "signups", :action => "create")
    end

    it "recognizes and generates #update" do
      { :put => "/signups/1" }.should route_to(:controller => "signups", :action => "update", :id => "1")
    end

    it "recognizes and generates #destroy" do
      { :delete => "/signups/1" }.should route_to(:controller => "signups", :action => "destroy", :id => "1")
    end

  end
end
