'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Menu, X, ChevronDown, Mail, Phone, Linkedin, Github, MapPin, Award, Code, Briefcase, Calendar, Send } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Controla si el menú móvil está abierto o cerrado
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  

  // Función para navegar suavemente a una sección
  //Desplaza suavemente a la sección seleccionada
  // Cierra automáticamente el menú móvil en dispositivos pequeños
  const scrollToSection = (sectionId:any) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Cierra el menú móvil al hacer clic
    }
  }

  // Función para manejar el formulario de contacto
  const handleInputChange = (e:any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Aquí iría la lógica real de envío
    alert('¡Mensaje enviado con éxito! Te contactaré pronto.')
    
    // Resetear formulario
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  // Items de navegación
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'perfil', label: 'Perfil' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' }
  ]

  // Datos de habilidades organizados por categorías
  const habilidades = {
    'Desarrollo Fullstack': ['Python (Django)', 'Java', 'C#', 'Node.js', 'Angular', 'HTML', 'CSS', 'TypeScript'],
    'Herramientas': ['Postman', 'GitHub', 'Jira', 'Visual Studio', 'TablePlus'],
    'Bases de Datos': ['SQL', 'PostgreSQL', 'MongoDB'],
    'Metodologías': ['Scrum', 'Azure DevOps', 'BPMN', 'UML'],
    'Análisis de Datos': ['Minería de datos', 'Machine Learning', 'SPSS Modeler', 'RapidMiner', 'Orange'],
    'Consultoría SAP': ['SAP S/4HANA Cloud', 'Módulos MM', 'Módulos WM', 'Módulos SD', 'SAP ARIBA']
  }

  // Datos de experiencia laboral
  const experiencia = [
    {
      empresa: 'Paladini',
      puesto: 'Analista Funcional SAP',
      periodo: '05/2025 – Actualidad',
      ubicacion: 'Argentina',
      tipo: 'actual',
      descripcion: 'Relevamiento de procesos y documentación. Configuración de estrategias de liberación, categoría de valoración, valoración por lotes, circuitos de compras e ingresos. Análisis Funcional en Implementación de SAP ARIBA Sourcing y Commerce.',
      logros: [
        'Creación de escenarios de pruebas y planes de testing',
        'Configuración de estrategias de liberación y valoración',
        'Análisis funcional en SAP ARIBA'
      ],
      tecnologias: ['SAP MM', 'SAP ARIBA', 'Testing', 'Análisis Funcional']
    },
    {
      empresa: 'PwC',
      puesto: 'Consultor SAP MM',
      periodo: '09/2024 – 05/2025',
      ubicacion: 'Argentina',
      tipo: 'pasado',
      descripcion: 'Participación en la implementación de SAP S/4HANA Cloud Public Edition en clientes multinacionales. Relevamiento de requerimientos, análisis de procesos y diseño de especificaciones técnicas para API REST.',
      logros: [
        'Integración de módulos SAP',
        'Diseño de procesos end-to-end',
        'Documentación técnico-funcional',
        'Implementación en clientes multinacionales'
      ],
      tecnologias: ['SAP S/4HANA Cloud', 'SAP MM', 'API REST', 'BBP']
    },
    {
      empresa: 'PwC',
      puesto: 'Analista de Sistemas',
      periodo: '11/2023 – 09/2024',
      ubicacion: 'Argentina',
      tipo: 'pasado',
      descripcion: 'Análisis y automatización de procesos para el área de impuestos. Relevamiento de requerimientos, validación de pruebas y documentación en Azure DevOps.',
      logros: [
        'Creación de casos de pruebas',
        'Metodología Scrum en gestión de proyectos',
        'Automatización de procesos impositivos'
      ],
      tecnologias: ['Azure DevOps', 'Scrum', 'Automatización', 'Testing']
    },
    {
      empresa: 'Pampa BI',
      puesto: 'Consultor SAP',
      periodo: '11/2022 – 11/2023',
      ubicacion: 'Argentina',
      tipo: 'pasado',
      descripcion: 'Testing y soporte en módulos MM/WM/SD, incluyendo pruebas unitarias e integrales. Modelado funcional y creación de diagramas UML, BPMN y DER para desarrollos en SAP Fiori.',
      logros: [
        'Entrega de desarrollo a clientes',
        'Capacitaciones a key-user',
        'Confección de BBP y documentación',
        'Modelado funcional con UML/BPMN'
      ],
      tecnologias: ['SAP MM', 'SAP WM', 'SAP SD', 'SAP Fiori', 'UML', 'BPMN']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Navigation - Fijo en la parte superior */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo y Nombre */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FN</span>
              </div>
              <span className="font-semibold text-gray-900">Franco Navarro</span>
            </div>
            
            {/* Navegación Desktop - Solo visible en pantallas grandes */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Botón Menú Móvil - Solo visible en pantallas pequeñas */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Navegación Móvil - Se despliega al hacer clic en el botón */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - Sección principal */}
      <section id="inicio" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Franco Martín Navarro
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600">
                Ingeniero en Sistemas de Información
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Especialista en consultoría SAP, desarrollo fullstack y análisis de datos
              </p>
            </div>
            
            {/* Botones de llamada a la acción */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('contacto')} 
                className="bg-gradient-to-r from-blue-600 to-purple-600"
              >
                Contactar
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('experiencia')}
              >
                Ver Experiencia
              </Button>
            </div>

            {/* Indicador de scroll */}
            <div className="animate-bounce mt-12">
              <ChevronDown className="h-6 w-6 text-gray-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

            {/* Profile Section - Sección de Perfil Profesional */}
      <section id="perfil" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Perfil Profesional
            </h2>
            
            <Card className="p-8">
              <CardContent className="space-y-8">
                {/* Avatar y Descripción Principal */}
                <div className="text-center space-y-6">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      FN
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Ingeniero en Sistemas con experiencia en consultoría SAP, desarrollo de software y análisis de datos. 
                      Capacidad para diseñar, optimizar e implementar soluciones tecnológicas innovadoras, alineadas con las necesidades del negocio.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Especializado en SAP MM con interés en machine learning, automatización de procesos y desarrollo fullstack.
                    </p>
                  </div>
                </div>
                
                {/* Información de Contacto e Idiomas */}
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  {/* Información de Contacto */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2 text-lg">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      Información de Contacto
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">+54 341 2791112</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">franconavarro1889@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <Linkedin className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">LinkedIn</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <Github className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">GitHub</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Idiomas */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2 text-lg">
                      <Award className="h-5 w-5 text-blue-600" />
                      Idiomas
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-gray-50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">Español</span>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Nativo
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-gray-50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">Inglés</span>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            Avanzado
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Avanzado (oral y escrito)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Áreas de Especialización */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold text-gray-900 text-lg mb-4">Áreas de Especialización</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Badge variant="outline" className="p-2 text-center justify-center">
                      Consultoría SAP
                    </Badge>
                    <Badge variant="outline" className="p-2 text-center justify-center">
                      Desarrollo Fullstack
                    </Badge>
                    <Badge variant="outline" className="p-2 text-center justify-center">
                      Análisis de Datos
                    </Badge>
                    <Badge variant="outline" className="p-2 text-center justify-center">
                      Machine Learning
                    </Badge>
                    <Badge variant="outline" className="p-2 text-center justify-center">
                      SAP MM
                    </Badge>
                    <Badge variant="outline" className="p-2 text-center justify-center">
                      Automatización
                    </Badge>
                    <Badge variant="outline" className="p-2 text-center justify-center">
                      Python
                    </Badge>
                    <Badge variant="outline" className="p-2 text-center justify-center">
                      Java
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section - Sección de Habilidades Técnicas */}
      <section id="habilidades" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Habilidades Técnicas
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(habilidades).map(([categoria, items]) => (
                <Card key={categoria} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Code className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{categoria}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {items.map((item, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs px-2 py-1 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Resumen de Habilidades */}
            <div className="mt-16 text-center">
              <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Resumen de Competencias</h3>
                  <p className="text-gray-700 max-w-3xl mx-auto">
                    Combino sólida experiencia en consultoría SAP con habilidades completas de desarrollo fullstack 
                    y análisis de datos. Mi formación me permite diseñar soluciones integrales que van desde 
                    la arquitectura de sistemas hasta la implementación de modelos de machine learning.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">6+</div>
                      <div className="text-sm text-gray-600">Categorías</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">25+</div>
                      <div className="text-sm text-gray-600">Tecnologías</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">3+</div>
                      <div className="text-sm text-gray-600">Años de Experiencia</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Sección de Experiencia Laboral */}
      <section id="experiencia" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Experiencia Laboral
            </h2>
            
            <div className="space-y-8">
              {experiencia.map((exp, index) => (
                <Card key={index} className={`p-6 hover:shadow-lg transition-all duration-300 ${
                  exp.tipo === 'actual' ? 'border-blue-200 bg-blue-50/30' : ''
                }`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {exp.tipo === 'actual' && (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                            Actual
                          </Badge>
                        )}
                        <h3 className="text-xl font-semibold text-gray-900">{exp.puesto}</h3>
                      </div>
                      <p className="text-blue-600 font-medium text-lg mb-1">{exp.empresa}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.periodo}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.ubicacion}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:ml-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.descripcion}</p>
                  
                  {exp.logros && exp.logros.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-600" />
                        Logros destacados:
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {exp.logros.map((logro, logroIndex) => (
                          <li key={logroIndex} className="leading-relaxed">{logro}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.tecnologias && exp.tecnologias.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4 text-blue-600" />
                        Tecnologías:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tecnologias.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Resumen de Experiencia */}
            <div className="mt-16 text-center">
              <Card className="p-8 bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Resumen Profesional</h3>
                  <p className="text-gray-700 max-w-3xl mx-auto">
                    Más de 3 años de experiencia progresiva en consultoría SAP y desarrollo de sistemas, 
                    trabajando con empresas multinacionales y proyectos de alta complejidad. Especializado en 
                    implementación de SAP S/4HANA Cloud y análisis funcional de módulos MM, WM y SD.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">4+</div>
                      <div className="text-sm text-gray-600">Empresas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">3+</div>
                      <div className="text-sm text-gray-600">Años de Experiencia</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">15+</div>
                      <div className="text-sm text-gray-600">Proyectos Completados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">SAP</div>
                      <div className="text-sm text-gray-600">Especialización Principal</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Sección de Contacto */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Contacto
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Información de Contacto Directo */}
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Información de Contacto
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Si estás interesado en colaborar o necesitas más información sobre mi perfil, 
                        no dudes en contactarme a través de cualquiera de estos medios.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <a 
                        href="mailto:franconavarro1889@gmail.com" 
                        className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <p className="text-sm text-gray-600">franconavarro1889@gmail.com</p>
                        </div>
                      </a>
                      
                      <a 
                        href="tel:+543412791112" 
                        className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
                          <Phone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Teléfono</p>
                          <p className="text-sm text-gray-600">+54 341 2791112</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://www.linkedin.com/in/franco-martin-navarro-2b01a9211/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                          <Linkedin className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">LinkedIn</p>
                          <p className="text-sm text-gray-600">/in/franco-martin-navarro-2b01a9211</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://github.com/FMN1999" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                          <Github className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">GitHub</p> 
                          <p className="text-sm text-gray-600">/FMN1999</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Disponibilidad */}
                <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                  <CardContent className="space-y-4">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      Disponibilidad
                    </h4>
                    <p className="text-gray-700">
                      Actualmente abierto a nuevas oportunidades profesionales y proyectos interesantes 
                      en consultoría SAP, desarrollo fullstack o análisis de datos.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Remoto</Badge>
                      <Badge variant="secondary">Híbrido</Badge>
                      <Badge variant="secondary">Presencial</Badge>
                      <Badge variant="secondary">Full-time</Badge>
                      <Badge variant="secondary">Freelance</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Formulario de Contacto */}
              <div>
                <Card className="p-6">
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Envíame un mensaje
                      </h3>
                      <p className="text-gray-600">
                        Puedes contactarme directamente a través de este formulario.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="Tu nombre"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="tu@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Asunto
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="¿Sobre qué es tu mensaje?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Mensaje
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Cuéntame sobre tu proyecto o consulta..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Enviando...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Enviar mensaje
                          </div>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FN</span>
              </div>
              <span className="font-semibold text-lg">Franco Martín Navarro</span>
            </div>
            
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ingeniero en Sistemas de Información especializado en consultoría SAP, 
              desarrollo fullstack y análisis de datos. Apasionado por crear soluciones 
              tecnológicas innovadoras.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:franconavarro1889@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/franco-martin-navarro-2b01a9211/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/FMN1999" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            
            <div className="pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                © 2025 Franco Martín Navarro. Todos los derechos reservados.
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Desarrollado con Next.js, TypeScript y Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}