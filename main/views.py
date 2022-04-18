from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.shortcuts import render
from .models import Instance
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from django.views.decorators.csrf import csrf_exempt
import json
from .serialazers import InstanceSerializer

class SignUpView(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'

def index(request):
    return render(request, 'index.html', {})

def login(request):
    return HttpResponseRedirect('accounts/login/')

def HomePageView(request):
    CHOICES = Instance.objects.all().values_list('id', flat=True)
    return render(request,'main/home_page.html', {'choices' : CHOICES} )

    #success_url = 'myapp/success.html'

def Get_id(request):

    if request.method == 'GET':
        choises = Instance.objects.all().values_list('id', flat=True)
        response = {}
        for choise in choises:
            response[str(choise)] = f'media/uploads/{choise}'+'.gltf'
        return JsonResponse(response)
    else:
        return HttpResponse("не гет запрос")


@csrf_exempt
def SearchResultView(request):

    if request.method == 'POST':

        data_json = json.loads(request.body)

        object_list = []
        #for id_name in id:
        id_name = data_json["id"]
        object_list += Instance.objects.filter(id__iexact=id_name)

        tracts = ['anterior_segment', 'posterior_segment', 'long_segment',
                               'fronto_occipital_fasciculus', 'inferior_longitudinal_fasciculus',
                               'uncinate_fasciculus', 'frontal_aslant_tract']

        if data_json['anterior_segment']:
            object_list += Instance.objects.filter(anterior_segment = data_json['anterior_segment'])
        if data_json['posterior_segment']:
            object_list += Instance.objects.filter(posterior_segment = data_json['posterior_segment'])
        if data_json['fronto_occipital_fasciculus']:
            object_list += Instance.objects.filter(fronto_occipital_fasciculus = data_json['fronto_occipital_fasciculus'])
        if data_json['inferior_longitudinal_fasciculus']:
            object_list += Instance.objects.filter(inferior_longitudinal_fasciculus = data_json['inferior_longitudinal_fasciculus'])
        if data_json['uncinate_fasciculus']:
            object_list += Instance.objects.filter(uncinate_fasciculus = data_json['uncinate_fasciculus'])
        if data_json['frontal_aslant_tract']:
            object_list += Instance.objects.filter(frontal_aslant_tract = data_json['frontal_aslant_tract'])
        if data_json['long_segment']:
            object_list += Instance.objects.filter(long_segment = data_json['long_segment'])

        object_list = set(object_list)

        response_data = {}

        for object in object_list:
            serialize_model = InstanceSerializer(object)
            response_data[f'media/uploads/{serialize_model.data["id"]}'+'.gltf'] = serialize_model.data

        return JsonResponse(response_data)
    else:
        return HttpResponse("сюда нужно отправлять post запрос")

def get_file(request):
    if request.method == 'GET':
        name = request.GET.get("name")
        return f'madia/uploads/{name}'+'.gltf'
    else:
        return HttpResponse("не гет запрос")

