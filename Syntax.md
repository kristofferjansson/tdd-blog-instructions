### Capybara
```ruby
visit "/" # go to "/"
fill_in "Title", :with => "Hello again" # fill in a form field with the value
click_on "Create" # click a link or a button with the text "Create"

current_path.should == new_post_path # assert that the current path is "/posts/new"
page.should have_content("Nice post") # assert that the text is visible
find_field("Title").value.should ==  "Hello World" # The title field should be filled with "Hello World"

save_and_open_page # cheating
```

### Rspec
```ruby
# controllers
assigns[:posts].should == [blog_post] # assert that @posts is an array with the element blog_post

# CRUD (in controllers)
get :index
post :create, :post => { :some => "param" }} # POST on create with the params[:post] => { :some => "param" }
put :update, {:id => 1, :post => { :some => "param" }}
delete :destroy {:id => 1 }

```

### Factory Girl
```ruby
post = FactoryGirl.create(:post, :title => "Hi", :body => "body") # create and save a post object
post = FactoryGirl.build(:post, :title => "Hi", :body => "body") # build but DONT save a post object
post_attributes = FactoryGirl.attributes_for(:post) # get the attributes for post
```

### Active Record
```ruby
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
```

### Shoulda
```ruby
it { should validate_presence_of(:last_name) }
it { should_not allow_value("blah").for(:email)  }
it { should allow_value("test@example.org").for(:email) }
```