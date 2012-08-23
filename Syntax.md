### Capybara
```ruby
visit "/" # go to "/"
fill_in "Title", :with => "Hello again" # fill in a form field with the value
click_on "Create" # click a link or a button with the text "Create"

current_path.should == new_post_path # assert that the current path is "/posts/new"
page.should have_content("Nice post") # assert that the text is visible
```

### Rspec
```ruby
# controllers
assigns[:posts].should == [blog_post] # assert that @posts is an array with the element blog_post

# CRUD
get :index
post :create, {:some => "param" } # POST on create with the params { :some => "param" }
put :update
delete :destroy

```