from django.shortcuts import render

# Create your views here.

#from django.http import HttpResponse
#def home(request):
#    return HttpResponse("This is SIT727 Task 2.3D (using Django!)")


from django.shortcuts import render

def home(request):
    return render(request, 'index.html')
