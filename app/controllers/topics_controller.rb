class TopicsController < ApplicationController

  
  # GET /topics
  # GET /topics.json
  def index

    @topics = Topic.order("created_at DESC").paginate(:page => params[:main_articles_page], :per_page => 2)
    @general = Topic.order("created_at DESC").find(:all, :conditions => { :tag => "General" })
    @football = Topic.order("created_at DESC").find(:all, :conditions => { :tag => "Football" })
    @topics_search = Topic.search(params[:search_query]).take(1)
    @topics_all = Topic.all.take(3)


    @likes = Like.order('created_at DESC').take(5)
    @user = User.new

  end

  # GET /topics/1
  # GET /topics/1.json
  def show
    if current_user
    @user = current_user
    else
    @user = User.new
    end
    @topic = Topic.find(params[:id])
    @topics_search = Topic.search(params[:search_query]).take(2)
    @post = Post.new(params[:post])
    @posts = @topic.posts


  end

  def backlog
    #@topics = Topic.order( where  :tag => "General").paginate(:page => params[:main_articles_page], :per_page => 2)
    #@topics_all = Topic.find(:all, :order => "tag" )
    @football = Topic.order("created_at DESC").find(:all, :conditions => { :tag => "Football" }).take(2)
    @general = Topic.order("created_at DESC").find(:all, :conditions => { :tag => "General" }).take(2)
    @food = Topic.order("created_at DESC").find(:all, :conditions => { :tag => "Food" }).take(2)
    @travel = Topic.order("created_at DESC").find(:all, :conditions => { :tag => "Travel" }).take(2)
    @today = Topic.order("created_at DESC").find(:all, :conditions => [" created_at between ? AND ?", Time.zone.now.beginning_of_day, Time.zone.now.end_of_day])
    @months = Topic.order("created_at DESC").find(:all, :conditions => [" created_at between ? AND ?", Time.zone.now.beginning_of_month, Time.zone.now.end_of_month])
  end
  # GET /topics/new
  # GET /topics/new.json
  def new

    if request.get?
      flash.now[:notice] = 'Article Drop'
    end
    @topic = Topic.new
    @user = current_user

    if request.post?
      respond_to do |format|
        format.html # new.html.erb
        format.json { render json: @topic }
      end
    end
  end

  # GET /topics/1/edit
  def edit
    @user = current_user
    @topic = Topic.find(params[:id])
  end

  # POST /topics
  # POST /topics.json
  def create
    @topic = Topic.new(params[:topic])

    respond_to do |format|
      if @topic.save
        format.html { redirect_to @topic, notice: 'Topic was successfully created.' }
        format.json { render json: @topic, status: :created, location: @topic }
      else
        format.html { render action: "new" }
        format.json { render json: @topic.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /topics/1
  # PUT /topics/1.json
  def update
    @topic = Topic.find(params[:id])

    respond_to do |format|
      if @topic.update_attributes(params[:topic])
        format.html { redirect_to @topic, notice: 'Topic was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @topic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /topics/1
  # DELETE /topics/1.json
  def destroy
    @topic = Topic.find(params[:id])
    @topic.destroy

    respond_to do |format|
      format.html { redirect_to topics_url }
      format.json { head :no_content }
    end
  end
end
