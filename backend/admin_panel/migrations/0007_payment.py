# Generated by Django 5.0.3 on 2024-03-24 17:51

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admin_panel', '0006_orderitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('payment_method', models.CharField(choices=[('paypal', 'PayPal'), ('zarinpal', 'ZarinPal')], max_length=10)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('status', models.CharField(choices=[('done', 'Done'), ('failed', 'Failed'), ('refunded', 'Refunded')], default='done', max_length=10)),
                ('payment_date', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateField(auto_now=True)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='payment', to='admin_panel.order')),
            ],
        ),
    ]
