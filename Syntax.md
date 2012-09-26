### Command Line
```bash
rake db:migrate
RAILS_ENV=test rake db:migrate

rspec spec
```

### Capybara
```ruby

it "should do my acceptance test"
  visit "/" # go to "/"
  fill_in "Title", :with => "Hello again" # fill in a form field with the value
  click_on "Create" # click a link or a button with the text "Create"

  current_path.should == new_post_path # assert that the current path is "/posts/new"
  page.should have_content("Nice post") # assert that the text is visible
  find_field("Title").value.should ==  "Hello World" # The title field should be filled with "Hello World"

  save_and_open_page # cheating
end
```

### Rspec
```ruby
# controllers
describe MyController do

  # CRUD (in controllers)
  it "should do requests" do
    get :index
    post :create, :post => { :some => "param" }} # POST on create with the params[:post] => { :some => "param" }
    put :update, {:id => 1, :post => { :some => "param" }}
    delete :destroy {:id => 1 }
  end

  it "should check assigns" do
    assigns[:posts].should == [blog_post] # assert that @posts is an array with the element blog_post
  end
end

#views


# watch the naming
describe "posts/index" do

  it "should view a title and a text" do
    # the variables are passed on to the view
    @posts = [FactoryGirl.create(:post, :title => "title" , :body => "body" * 50)]
    
    # renders the view - the name of the test...
    render

    # assert the content
    rendered.should have_content("title")
    rendered.should have_content("body" * 50)
  end

end
```

### Factory Girl
```ruby
it "should test" do
  post = FactoryGirl.create(:post, :title => "Hi", :body => "body") # create and save a post object
  post = FactoryGirl.build(:post, :title => "Hi", :body => "body") # build but DONT save a post object
  post_attributes = FactoryGirl.attributes_for(:post) # get the attributes for post
end
```

### Active Record
```ruby
class MyModel < ActiveRecord::Base
  #validations
  validates :terms, :acceptance => true
  validates :password, :confirmation => true
  validates :username, :exclusion => { :in => %w(admin superuser) }
  validates :email, :format => { :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create }
  validates :age, :inclusion => { :in => 0..9 }
  validates :first_name, :length => { :maximum => 30 }
  validates :age, :numericality => true
  validates :username, :presence => true
  validates :username, :uniqueness => true
end
```

### Shoulda
```ruby
describe "testing", MyModel
  it { should validate_presence_of(:last_name) }
  it { should_not allow_value("blah").for(:email)  }
  it { should allow_value("test@example.org").for(:email) }
end
```