from rest_framework import serializers
from .models import Comment
from django.contrib.auth.models import User






class CommentSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Comment
        fields = ['id','video_id','text','likes','dislikes', 'user_id']
        depth = 1
