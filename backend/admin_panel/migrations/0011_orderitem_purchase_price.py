# Generated by Django 5.0.3 on 2024-03-24 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admin_panel', '0010_bugfix_admin_models'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='purchase_price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='created_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
