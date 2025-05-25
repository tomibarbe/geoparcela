import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/ContactForm"
import {
  Smartphone,
  MapPin,
  BarChart3,
  DollarSign,
  Zap,
  Heart,
  Quote,
  Leaf,
  Navigation,
  Save,
  Edit3,
} from "lucide-react"
import Link from "next/link"

export default function GeoParcela() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Leaf className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-xl font-bold text-stone-800">GeoParcela</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#como-funciona"
            className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
          >
            Cómo funciona
          </Link>
          <Link
            href="#beneficios"
            className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
          >
            Beneficios
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
          >
            Contacto
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-stone-900/90 z-10"></div>
            <img
              src="/placeholder.jpg"
              alt="Ganado en pastoreo"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Tecnología AgTech</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Ganado libre, manejo inteligente
                  </h1>
                  <p className="max-w-[600px] text-emerald-50 md:text-xl">
                    Revoluciona el pastoreo con cercas virtuales. GeoParcela utiliza collares GPS e IoT para definir
                    límites digitales, eliminando las cercas físicas y optimizando el manejo del ganado.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Conocer más
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-black/40 text-white border-white hover:bg-black/60"
                  >
                    Ver demo
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[400px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full opacity-20"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full opacity-30"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                      <p className="text-sm font-medium text-white">Cerca Virtual Activa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-stone-800">Cómo funciona</h2>
                <p className="max-w-[900px] text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tres simples pasos para transformar tu manejo ganadero
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <Smartphone className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold text-stone-800">1. Coloca el collar</h3>
                    <p className="text-stone-600">
                      Instala nuestros collares GPS inteligentes en tu ganado. Son resistentes al agua y tienen batería
                      de larga duración.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <MapPin className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold text-stone-800">2. Define la parcela</h3>
                    <p className="text-stone-600">
                      Usa nuestra app para dibujar cercas virtuales en tu campo. Define zonas de pastoreo con precisión
                      GPS.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <BarChart3 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold text-stone-800">3. Gestiona el pastoreo</h3>
                    <p className="text-stone-600">
                      Monitorea en tiempo real y recibe alertas. Optimiza el pastoreo rotativo y mejora la productividad
                      del campo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Control de Campo */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-stone-800">
                Controla tu campo con precisión
              </h2>
              <p className="max-w-[900px] text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Gestiona tus parcelas virtuales desde una interfaz intuitiva
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-emerald-200 overflow-hidden">
                <CardContent className="p-0">
                  {/* Map Interface */}
                  <div className="relative bg-gradient-to-br from-green-100 to-emerald-200 h-96 md:h-[500px]">
                    {/* Field Background */}
                    <div className="absolute inset-0 opacity-80">
                      <img
                        src="/campo.jpg"
                        alt="Campo aéreo"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Virtual Paddocks */}
                    <div className="absolute top-8 left-8 w-1/3 h-3/5 border-2 border-emerald-600 border-dashed bg-emerald-100/60 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-medium text-emerald-700">Parcela A</span>
                    </div>
                    <div className="absolute top-20 right-60 w-1/3 h-3/5 border-2 border-blue-600 border-dashed bg-blue-100/60 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-700">Parcela B</span>
                    </div>

                    {/* Control Panel */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <div className="flex gap-2 flex-wrap justify-center">
                        <Button size="sm" variant="outline" className="text-xs">
                          <Edit3 className="h-3 w-3 mr-1" />
                          Dibujar cerca virtual
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          <Save className="h-3 w-3 mr-1" />
                          Guardar parcela
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          <Navigation className="h-3 w-3 mr-1" />
                          Ver ganado
                        </Button>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 border border-emerald-600 border-dashed bg-emerald-100/50"></div>
                          <span>Parcelas activas</span>
                        </div>
                        <div className="flex items-center gap-2">
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-stone-800">
                  Beneficios que transforman tu campo
                </h2>
                <p className="max-w-[900px] text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre cómo GeoParcela mejora tu productividad y rentabilidad
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <DollarSign className="h-8 w-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-800">Ahorro de costos</h3>
                <p className="text-stone-600">
                  Elimina la necesidad de cercas físicas. Reduce costos de instalación y mantenimiento hasta en un 70%.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <Zap className="h-8 w-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-800">Manejo eficiente</h3>
                <p className="text-stone-600">
                  Optimiza el pastoreo rotativo. Mejora la utilización del pasto y aumenta la capacidad de carga del
                  campo.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <Heart className="h-8 w-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-800">Bienestar animal</h3>
                <p className="text-stone-600">
                  Reduce el estrés del ganado. Los animales se adaptan naturalmente a las señales del collar sin
                  restricciones físicas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Quote className="h-12 w-12 text-emerald-600" />
              <blockquote className="text-xl md:text-2xl font-medium text-stone-800 max-w-3xl">
                "GeoParcela revolucionó nuestro manejo ganadero. En 6 meses aumentamos la productividad del campo en 40%
                y reducimos los costos operativos significativamente. Es el futuro de la ganadería."
              </blockquote>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-stone-800">Carlos Mendoza</p>
                <p className="text-stone-600">Productor ganadero - Estancia San Miguel, Buenos Aires</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sumate al cambio</h2>
                <p className="max-w-[600px] text-emerald-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sé parte de la revolución en el manejo ganadero. Únete a nuestra lista de espera y sé de los primeros
                  en acceder a GeoParcela.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <ContactForm />
                <p className="text-xs text-emerald-100">Te contactaremos cuando esté disponible en tu región.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-stone-500">© 2024 GeoParcela. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-stone-500">
            Términos de Servicio
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-stone-500">
            Privacidad
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-stone-500">
            Contacto
          </Link>
        </nav>
      </footer>
    </div>
  )
}
