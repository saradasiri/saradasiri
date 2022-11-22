import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const PrivacyNotice = () => {
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });
  if (!fontsLoad) {
    return null;
  }
  return (
    <>
      <Text style={[styles.modalLevel, { color: "grey" }]}>
        En cumplimiento de lo dispuesto por la Ley Federal
        de Protección de Datos Personales en Posesión de los Particulares (la
        LFPDPPP) y su Reglamento, así como con los Lineamientos del Aviso de
        Privacidad, demás leyes y disposiciones aplicables, se expide el
        presente aviso de privacidad con el fin de garantizar la privacidad y el
        derecho a la autodeterminación informativa de los usuarios, clientes,
        proveedores, prestadores, personal y/o en general de toda aquella
        persona que comparta o transmita voluntariamente sus datos personales a
        VADI a través de su sitio web www.vadi.com.mx, y/o por cualquier otro
        medio. Identidad y domicilio del responsable. VADI con domicilio en
        Norte América 303-8, Vista Hermosa, CP 64620, Monterrey, Nuevo León,
        México y correo electrónico privacidad@vadi.com.mx; es el único
        responsable de la obtención, uso, almacenamiento y divulgación de los
        datos personales de los Titulares, conforme a lo establecido en el
        presente Aviso de Privacidad, garantizando en su carácter de responsable
        el buen uso, protección y confidencialidad de los mismos, observando en
        todo momento los principios de licitud, consentimiento, información,
        calidad, finalidad, lealtad, proporcionalidad y responsabilidad,
        previstos en la LFPDPPP y su Reglamento. Datos sometidos a tratamiento.
        Para el cumplimiento de su objeto social y el desarrollo de las
        finalidades descritas, VADI recabará del Titular, los siguientes datos
        personales y datos personales sensibles, de conformidad con la
        clasificación contenida en la fracción VI del artículo 3 de la LFPDPPP,
        en adelante y de manera conjunta los Datos Personales: a) Datos
        personales: nombre completo, domicilio(s), número de teléfono celular,
        fijo y alternos, correo electrónico, clave única de registro de
        población (CURP), lugar y fecha de nacimiento, sexo, estado civil,
        nacionalidad, domicilio fiscal, firma autógrafa digitalizada, RFC, clave
        de elector, número de seguridad social, información laboral incluyendo
        tipo de empleo, empleador y teléfono del empleo. b) Datos personales
        sensibles: información económica y financiera, ingresos y egresos
        mensuales e información de cuenta bancaria, datos biométricos incluyendo
        fotografía, geolocalización. En el caso de datos personales sensibles
        VADI requerirá el consentimiento expreso del Titular para su debido
        tratamiento, de conformidad con lo establecido por el artículo 9° de la
        LFPDPPP. Finalidades del Tratamiento de los Datos Personales. Los Datos
        Personales recabados serán utilizados por VADI para llevar a cabo las
        siguientes actividades necesarias para establecer y/o cumplir con las
        obligaciones derivadas de la relación jurídica que pueda existir con el
        Titular: 1. Identificar al Titular. 2. Celebrar el o los contratos
        correspondientes con el Titular. 3. Dar cumplimiento a las obligaciones
        acordadas en los contratos celebrados. 4. Dar cumplimiento a las
        obligaciones establecidas en las leyes aplicables. 5. Realizar
        notificaciones. Adicionalmente, de contar con el consentimiento expreso
        del Titular, VADI podrá utilizar los Datos Personales para las
        siguientes actividades que permiten brindar un mejor servicio: 1.
        Publicidad y ofertas sobre productos o servicios relacionados con la
        operación de VADI. 2. Publicidad y ofertas sobre productos o servicios
        ofrecidos por terceros no relacionados con VADI. 3. Analizar la manera
        en que el Titular hace uso de los servicios y sitios web, así como la
        modificación o actualización de los servicios que se pretenden
        contratar. 4. Analizar los datos personales del Titular para fines
        estadísticos y de análisis de mercado. 5. Analizar la utilidad de la
        publicidad utilizada. Transferencia de Datos Personales. Los datos
        personales del Titular podrán ser transferidos y tratados por personas
        distintas a VADI dentro y fuera del territorio nacional, para las
        finalidades establecidas en el presente Aviso de Privacidad, así como
        para poder cumplir con las obligaciones legales frente al Titular y
        frente a las autoridades de los países en los que opera. En ese sentido,
        la información del Titular podrá ser compartida con: (i) empleados,
        compañías matrices, controladoras, afiliadas o subsidiarias de VADI,
        (ii) empresas proveedoras de servicios de mensajería, mismas que
        solamente utilizarán los Datos Personales necesarios para la prestación
        de los servicios que le fueron encomendados y relacionados al contrato,
        (iii) prestadores de servicio que tienen celebrado un contrato con VADI,
        (iv) organismos públicos, administraciones públicas (federales,
        estatales o municipales), comisiones, institutos y/o entidades
        reguladoras para el cumplimiento de obligaciones informativas, de
        transparencia y de prevención de lavado de dinero, así como para el
        cumplimiento de requerimientos judiciales o administrativos emitidos por
        autoridades competentes, (v) organismos, entidades o autoridades en el
        extranjero para el cumplimiento de requerimientos o solicitudes con
        efectos en territorio mexicano, o exigibles conforme a Tratados
        Internacionales de los que México sea parte, (vi) Sociedades de
        Información Crediticia, (vii) asesores legales y financieros de VADI, y
        (viii) el Instituto Nacional Electoral para efectos del servicio de
        verificación de datos de la credencial para votar que provee el
        Instituto Nacional Electoral. Con fundamento en lo dispuesto por el
        artículo 68 del Reglamento de la LFPDPPP y el artículo 36 de dicha Ley,
        el Titular consiente y autoriza expresamente cualquier transferencia de
        sus Datos Personales que VADI realice a cualquiera de las empresas y/o
        entidades enlistadas en el párrafo anterior; garantizando que las
        transferencias realizadas cumplirán en todo momento con lo dispuesto por
        la LFPDPPP y su Reglamento. Derechos ARCO (Acceso, Rectificación,
        Cancelación y Oposición). En todo momento y cuando sea legalmente
        procedente, el Titular tiene derecho de acceder, rectificar y cancelar
        sus Datos Personales, a oponerse al tratamiento de estos, limitar su uso
        o divulgación. Para tal efecto, el Titular deberá mandar una solicitud
        por escrito dirigida al Departamento de Datos Personales de VADI a
        través del correo electrónico info@vadi.com.mx, dicha solicitud deberá
        cumplir con los siguientes requisitos: (i) nombre completo del Titular,
        domicilio u otro medio para comunicarle la respuesta a su solicitud,
        (ii) documentos que acrediten su identidad o, en su caso, la
        representación legal del Titular tal como credencial de elector,
        pasaporte o licencia para conducir, (iii) la descripción clara y precisa
        de los Datos Personales respecto de los que se busca ejercer alguno de
        los derechos ARCO y (iv) cualquier otro elemento o documento que
        facilite la localización de los datos personales. En el caso de
        solicitudes de rectificación de datos personales, el Titular deberá
        indicar, además las modificaciones a realizarse y aportar la
        documentación que sustente su petición. Recibida la solicitud con todos
        los requisitos anteriores, VADI contará con un plazo máximo de 20
        (veinte) días hábiles para notificar al Titular la determinación
        adoptada, a efecto de que, si resulta procedente, se haga efectiva la
        misma dentro de los 15 (quince) días siguientes a la fecha en que se
        comunica la respuesta. Los plazos antes referidos podrán ser ampliados
        una sola vez por un periodo igual, siempre y cuando así lo justifiquen
        las circunstancias del caso. En caso de que la información proporcionada
        en la solicitud sea insuficiente o errónea, o bien, no se acompañen los
        documentos necesarios, VADI podrá, dentro de los 5 (cinco) días hábiles
        siguientes a su recepción, requerir al Titular que aporte los elementos
        o documentos necesarios para dar trámite a la misma, contando este
        último con un plazo de 10 (diez) días hábiles para atender el
        requerimiento, los cuales comenzarán a correr a partir del día siguiente
        en que haya recibido el requerimiento; de no dar respuesta en dicho
        plazo, se tendrá por no presentada la solicitud correspondiente, sin
        responsabilidad para VADI, no obstante, el Titular podrá volver a
        presentar la solicitud en cualquier momento. La respuesta de VADI se
        dará por la vía que se indique en la solicitud. Revocación. El Titular
        podrá revocar el consentimiento otorgado a VADI para el tratamiento de
        sus Datos Personales en cualquier momento, sin efectos retroactivos, en
        aquellos casos en que dicha revocación no suponga la imposibilidad de
        cumplir obligaciones derivadas de una relación jurídica vigente entre el
        Titular y VADI. El Titular conoce que, para ciertos fines, la revocación
        de su consentimiento implicará que VADI no pueda seguir prestando el
        servicio para el cual fue contratado o en su defecto la conclusión de la
        relación existente entre las partes. El procedimiento para la revocación
        del consentimiento, en su caso, será el mismo que el establecido en el
        apartado VI anterior para el ejercicio de los derechos ARCO. Limitación
        del uso o divulgación de los Datos Personales. El Titular también podrá
        ejercer su derecho de limitar el uso o divulgación de su información,
        por ejemplo, para fines de mercadotecnia y/o publicidad, siguiendo el
        mismo procedimiento que con los derechos ARCO. Uso de Cookies, web
        beacons u otras tecnologías similares. VADI utiliza cookies para
        facilitar la navegación en el sitio web de VADI, que le permiten
        recopilar, analizar y conservar información técnica relacionada con los
        hábitos de uso de los Titulares, a través de archivos que recaban
        información de forma automática en el momento en que el Titular hace uso
        de nuestros servicios electrónicos. Si usted navega en el sitio web sin
        cambiar la configuración, se considerará que acepta su instalación y uso
        conforme a nuestra política de cookies. Sin embargo, si lo desea, puede
        cambiar la configuración de cookies en cualquier momento. Modificaciones
        al Aviso de Privacidad. VADI podrá modificar, actualizar, extender o de
        cualquier otra forma cambiar el contenido y alcance del presente Aviso
        de Privacidad, en cualquier momento y bajo su completa discreción, en
        tal supuesto VADI comunicará de inmediato al Titular dichos cambios a
        través de la página web de VADI. La entrada en vigor de los cambios que
        sufra el presente Aviso de Privacidad surtirá efectos una vez
        transcurridos 10 (diez) días desde su publicación, dentro de cuales el
        Titular deberá manifestar si no está conforme con las mismas, en cuyo
        caso se suspenderá la prestación de servicios. Vencido este plazo sin
        inconformidad del Titular, se considerará que este acepta las
        modificaciones al Aviso de Privacidad. INAI. La autoridad competente en
        materia de protección de datos personales en México es el Instituto
        Nacional de Transparencia, Acceso a la Información y Protección de Datos
        Personales (INAI). En caso de que el Titular considere que se están
        vulnerando sus derechos puede acudir con el INAI para obtener más
        información y ayuda al respecto. Consentimiento. Al utilizar los medios
        electrónicos y/o contratar los servicios que ofrecemos, usted reconoce y
        acepta de manera tácita el presente Aviso de Privacidad, sin que esto
        excluya que VADI establezca mecanismos para recabar su consentimiento
        expreso para tratar sus Datos Personales para las finalidades aquí
        previstas.
      </Text>
    </>
  );
};

export default PrivacyNotice;

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
});
