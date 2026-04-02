# 📧 Configurar Email de Confirmación Automática

El formulario ya está configurado para enviar un email automático de confirmación al usuario cuando envía el formulario.

## 🚀 Configuración Rápida

### Paso 1: Activa el Autoresponder en Web3Forms

1. Ve a tu **Dashboard de Web3Forms**: https://web3forms.com/dashboard
2. Haz clic en tu formulario
3. Ve a la sección **"Autoresponder"** o **"Settings"**
4. **Activa** el autoresponder
5. Personaliza el mensaje de confirmación

### Paso 2: Personaliza el Mensaje (Opcional)

En el dashboard de Web3Forms puedes personalizar:

**Asunto del email:**
```
Thank you for contacting CL Renovations
```

**Cuerpo del mensaje:**
```
Hi {{name}},

Thank you for getting in touch with CL Renovations!

We've received your message and one of our team members will get back to you within 24 hours.

In the meantime, feel free to check out our recent projects on our website.

Best regards,
CL Renovations Team

---
This is an automated message confirming we received your inquiry.
```

### 📝 Variables Disponibles

Puedes usar estas variables en tu mensaje:
- `{{name}}` - Nombre del usuario
- `{{email}}` - Email del usuario
- `{{phone}}` - Teléfono (si lo proporcionó)
- `{{message}}` - Mensaje del usuario

## ✨ Qué está Configurado

El código ya incluye:

```typescript
{
  // ... otros campos
  replyto: form.email.trim(),     // Email del usuario para responder
  autoresponse: true,             // Activa el autoresponder
}
```

Esto significa que:
- ✅ El email se enviará automáticamente al usuario
- ✅ El asunto y mensaje se personalizan desde el dashboard
- ✅ El usuario recibirá confirmación instantánea
- ✅ Incluye el nombre del usuario en el email

## 🎨 Ejemplo de Email que Recibe el Usuario

```
De: CL Renovations <noreply@web3forms.com>
Para: usuario@email.com
Asunto: Thank you for contacting CL Renovations

Hi John,

Thank you for getting in touch with CL Renovations!

We've received your message:
"Hello, I'm interested in kitchen renovation..."

One of our team members will get back to you within 24 hours.

Best regards,
CL Renovations Team
```

## ⚙️ Configuración Avanzada (Opcional)

### Personalizar el Remitente

En el dashboard de Web3Forms puedes:
- Cambiar el nombre de "remitente" (From Name)
- Agregar tu logo al email
- Personalizar colores y diseño

### HTML Template

Puedes usar HTML para hacer el email más atractivo:

```html
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #c9a96e; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">CL Renovations</h1>
  </div>
  
  <div style="padding: 30px; background: #f9f9f9;">
    <p>Hi <strong>{{name}}</strong>,</p>
    
    <p>Thank you for contacting CL Renovations! We've received your message:</p>
    
    <div style="background: white; padding: 15px; border-left: 4px solid #c9a96e; margin: 20px 0;">
      <em>{{message}}</em>
    </div>
    
    <p>We'll get back to you within <strong>24 hours</strong>.</p>
    
    <p>Best regards,<br>
    <strong>The CL Renovations Team</strong></p>
  </div>
  
  <div style="background: #333; color: #999; padding: 15px; text-align: center; font-size: 12px;">
    <p>This is an automated confirmation email</p>
  </div>
</body>
</html>
```

## 🔧 Solución de Problemas

### Los usuarios no reciben el email de confirmación

1. **Verifica que esté activado** en tu dashboard de Web3Forms
2. **Revisa la carpeta de spam** del usuario
3. **Comprueba que `replyto`** tenga el email correcto
4. **Verifica tu plan** - algunos planes tienen límites

### El email llega pero sin formato

- Asegúrate de que has guardado la plantilla en el dashboard
- Verifica que estés usando HTML válido
- Prueba primero con texto plano

## 📊 Límites

**Plan Gratuito:**
- ✅ 250 emails/mes
- ✅ Autoresponder incluido
- ✅ Sin límite de formularios

**Plan Pro ($5/mes):**
- ✅ 1,000 emails/mes
- ✅ Sin branding de Web3Forms
- ✅ Webhooks y más funciones

## ✅ Checklist de Activación

- [ ] 1. Ir al dashboard de Web3Forms
- [ ] 2. Activar autoresponder en configuración
- [ ] 3. Personalizar asunto del email
- [ ] 4. Escribir mensaje de confirmación
- [ ] 5. Probar enviando un formulario
- [ ] 6. Verificar que llegue el email (revisar spam si no aparece)

## 🎉 ¡Listo!

Una vez activado en el dashboard, cada vez que alguien envíe el formulario:
1. Tú recibes el mensaje en tu email
2. El usuario recibe automáticamente un email de confirmación
3. Sin configuración adicional necesaria

Todo automático, sin backend, sin complicaciones. 🚀
