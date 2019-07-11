from django.shortcuts import render
from django.urls import reverse_lazy
# Create your views here.
from django.views.generic import ListView, DetailView,DeleteView,UpdateView,CreateView
from .models import Post
class BlogListView(ListView):
    model = Post
    context_object_name='vidya'
    template_name = 'blog/home.html'

class BlogDetailView(DetailView):
    model = Post
    template_name = 'blog/post_detail.html'

class BlogCreateView(CreateView): # new
    model = Post
    template_name = 'blog/post_new.html'
    fields = '__all__'
class BlogUpdateView(UpdateView): # new
    model = Post
    template_name = 'blog/post_edit.html'
    fields = ['title', 'body']
class BlogDeleteView(DeleteView): # new
    model = Post
    template_name = 'blog/post_delete.html'
    success_url = reverse_lazy('home')
