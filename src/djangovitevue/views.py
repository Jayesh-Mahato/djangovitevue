from django.shortcuts import render, redirect, get_object_or_404
from django.conf import settings

def homepage(request):
	template = "homepage.html"
	context = {}
	return render(request,template,context)