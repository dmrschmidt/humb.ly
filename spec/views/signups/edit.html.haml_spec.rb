require 'spec_helper'

describe "signups/edit.html.haml" do
  before(:each) do
    @signup = assign(:signup, stub_model(Signup,
      :mail => "MyString"
    ))
  end

  it "renders the edit signup form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => signups_path(@signup), :method => "post" do
      assert_select "input#signup_mail", :name => "signup[mail]"
    end
  end
end
