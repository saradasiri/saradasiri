import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const TermsConditions = () => {
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });
  if (!fontsLoad) {
    return null;
  }
  return (
    <>
      <Text style={[styles.modalLevel, { color: "grey" }]}>
        <Text style={styles.bold}>Manifestación de consentimiento.{"\n"}</Text>
        Antes de hacer uso de nuestro servicios, debe aceptar nuestros Términos
        de Uso. Al acceder a los Sitios web WWW.VADI.COM, así como a los Sitios,
        aplicaciones y herramientas relacionadas con nuestros servicios (en
        adelante los “Sitios”), usted manifiesta su consentimiento al generar
        una cuenta de Usuario única y particular, identificada con un nombre o
        identidad por Ud. asignado, su consentimiento del presente acuerdo de
        servicios se perfecciona y, como adherente se convierte en Usuario, sin
        distingo en razón de la forma, medio o procedimiento utilizado para
        obtener acceso o hacer uso de los mismos, y derivado de este hecho,
        acepta y acuerda obligarse sin reservas en los términos contenidos en el
        presente instrumento.{"\n\n"}En todo caso, al acceder a los Sitios por
        su parte, aún sin convertirse en Usuario en los términos del párrafo
        anterior, se considerará que Ud. ha aceptado los presentes términos y
        manifestado su consentimiento y ellos regularán cualquier efecto
        jurídico derivado de su acceso.{"\n"}Queda claramente establecido que el
        acuerdo con EL OPERADOR comprende su consentimiento a nuestro Aviso de
        Privacidad así como a él o los avisos legales publicados en los Sitios
        (en conjunto los “Términos”).{"\n"}A menos que Ud. y VADI acuerden por
        escrito condiciones diversas o distintas a las estipuladas en los
        Términos, estas prevalecerán y podrán ser actualizadas en cualquier
        momento y a entera discreción de VADI, bastando para ello la
        notificación en los Sitios de la modificación o actualización y su fecha
        de inicio de vigencia. El uso continuo de los servicios una vez
        publicada la actualización implica su aceptación plena.{"\n"}Los
        Términos conforman un acuerdo legalmente vinculante entre Ud. y VADI.
        Éstos son establecidos con apego al derecho positivo mexicano así como
        los tratados internacionales de los que el país sea parte y hubiese
        ratificado, son presentados en idioma español y, en caso de publicar
        alguna traducción, esta tendrá carácter meramente informativo.{"\n"}Al
        acceder a los Sitios, al convertirse en Usuario y hacer uso de los
        servicios, Ud. acepta universalmente los Términos. Si decide no
        aceptarlos y no adherirse a sus condiciones, es necesario que cancele su
        cuenta y con ello deje de ser Usuario, reservándose el acceso futuro a
        los Sitios. De no hacerlo su obligación y aceptación permanecerán con
        los efectos legales conducentes.{"\n"}Los Términos aplican en general
        para los Sitios, siendo únicamente aquellos preceptos aplicables en
        exclusiva para una u otra plataforma, los que se indiquen con claridad
        como particulares o diferenciados para WWW.VADI.COM.
        {"\n"}
        <Text style={styles.bold}>Definiciones.</Text>
        {"\n"}Para los fines de los Términos, las siguientes definiciones
        tendrán el significado que a continuación se les atribuye, en el
        entendido que dicho significado será igualmente aplicable al singular y
        al plural de las definiciones:{"\n"}
        <Text style={styles.bold}>Sitios: </Text>Se refiere en general y en
        conjunto a los Sitios web WWW.VADI.COM, así como a los Sitios,
        aplicaciones y herramientas relacionadas con los Servicios a los que
        puede acceder el público en general y, en caso de así desearlo y
        consentirlo, convertirse en Usuario.{"\n"}
        <Text style={styles.bold}>Servicios: </Text>Se refiere a los servicios
        provistos por VADI mediante los Sitios, y que son diferenciados y
        detallados posteriormente para cada una de las plataformas en la sección
        “Delimitación y Alcance de los Servicios” de este instrumento.{"\n"}
        <Text style={styles.bold}>Plataforma: </Text>Se refiere a las interfaces
        de titularidad y operadas por VADI, WWW.VADI.COM denominadas en conjunto
        los Sitios, en las que el Usuario puede acceder, convertirse en Usuario
        y hacer uso de los Servicios, a las que podrá hacerse referencia como
        sigue: “PLATAFORMA VADI”.{"\n"}
        <Text style={styles.bold}>Ley Fintech: </Text>Se refiere a la “Ley para
        Regular las Instituciones de Tecnología Financiera” vigente en México.
        {"\n"}
        <Text style={styles.bold}>Activos Virtuales: </Text>De conformidad con
        la Ley Fintech es la representación de valor registrada electrónicamente
        y utilizada entre el público como medio de pago para todo tipo de actos
        jurídicos y cuya transferencia únicamente puede llevarse a cabo a través
        de medios electrónicos.{"\n"}
        Para efectos de los Términos y los usos y costumbres relacionados, los
        activos virtuales pueden ser también denominados o identificados como
        Criptomonedas, Criptodivisas, Divisas virtuales o digitales, Moneda o
        Activo Digital o virtual, Tokens criptográficos, Tokens digitales o
        Monedas criptográficas, entre otras.
        {"\n"}
        Las criptomonedas o Activos virtuales a ser intercambiados, comprados o
        vendidos mediante los Sitios no son moneda de curso legal en territorio
        nacional ni poseen poder liberatorio, tampoco tienen el respaldo de
        banco central o autoridad. Cada activo puede ser generado y transferido
        por una tecnología o registro público o, en su caso, por un emisor
        privado.{"\n"}
        Para todos los efectos y para todos los casos, VADI no tiene relación ni
        responsabilidad con la generación, emisión, administración y uso de los
        Activos Virtuales con los que se realicen operaciones comerciales en los
        Sitios. En el momento en que el Banco de México, mediante disposiciones
        de carácter general que corresponda, establezca los activos virtuales
        con los que se pueda operar en territorio nacional, nos apegaremos a
        dichas disposiciones.
        {"\n"}
        <Text style={{ backgroundColor: "yellow" }}>
          USD COIN (USDC): Es un ACTIVO VIRTUAL (Token ERC-20 emitido en la red
          Ethereum) que pertenece a la familia de las denominadas “criptomonedas
          estables” o stablecoins en virtud de que su valor se mantiene estable
          contra el dólar americano. Forma parte de una iniciativa del consorcio
          denominado CENTRE (https://www.centre.io/), fundado por Coinbase y
          Circle, dos de los exchanges más importantes del sector de los ACTIVOS
          VIRTUALES a nivel internacional.{"\n"}
          El USDC es usado como base de la operación de los servicios ofertados
          en LOS Sitios, no es moneda de curso legal en territorio nacional ni
          posee poder liberatorio, tampoco tiene el respaldo de banco central o
          autoridad ni nacional ni extranjera.{"\n"}
          Para efectos de lo establecido en los presentes Términos, cuando no se
          realice una referencia directa al USDC, este se entenderá integrado
          cuando estos se refieran a ACTIVOS VIRTUALES, aplicable al singular y
          al plural de la definición.
        </Text>
        {"\n"}
        <Text style={styles.bold}>Fork: </Text>se refiere a los denominados fork
        o bifurcación, como aquel cambio programado o súbito que se presenta en
        los protocolos subyacentes que soportan a los Activos Virtuales y que
        pueden derivar en la creación de una o más cadenas de bloques teniendo
        como resultado uno o varios activos virtuales nuevos.{"\n"}
        De ser posible VADI notificará o alertará a los Usuarios por medio de
        los canales establecidos de posibles próximas bifurcaciones. Sin
        embargo, es responsabilidad del Usuario estar al tanto de posibles
        próximas bifurcaciones y tomar las acciones que considere pertinentes
        para lidiar con la bifurcación de la manera que le resulte conveniente.
        {"\n"}
        En el evento de un Fork o bifurcación es posible que VADI tenga que
        suspender algunas o todas las operaciones del Activo Virtual afectado
        por dicha bifurcación sin previo aviso de esta situación a los Usuarios.
        {"\n"}
        VADI se reserva el derecho a decidir antes, durante o después de una
        bifurcación si se mantendrán como objeto de operaciones en los Sitios
        una, ambas o ninguna de las ramas de activos virtuales resultantes de
        dicha bifurcación.{"\n"}
        El Usuario manifiesta que entiende los riesgos presentados por las
        bifurcaciones y por lo tanto acepta que VADI no tiene la responsabilidad
        de asistirle en el retiro o venta de los Activos Virtuales resultantes
        de una bifurcación que no se mantengan como objeto de operaciones en la
        los Sitios.{"\n"}
        <Text style={{ backgroundColor: "yellow" }}>
          ACTIVOS REPRESENTADOS ELECTRÓNICAMENTE (ARES):{" "}
        </Text>
        Se refiere a otro tipo de activos, virtuales o materiales, que bajo una
        representación de valor registrada electrónicamente podrán ser parte de
        las operaciones en LOS Sitios.{"\n"}
        Los ARES a ser intercambiados, comprados o vendidos mediante LOS Sitios
        no son moneda de curso legal en territorio nacional ni poseen poder
        liberatorio, tampoco tienen el respaldo de banco central o autoridad.
        Cada activo puede ser generado y transferido por una tecnología o
        registro público o, en su caso, por un emisor privado.{"\n"}
        Para todos los efectos y para todos los casos, EL OPERADOR no tiene
        relación ni responsabilidad con la generación, emisión, administración y
        uso de los ARES con los que se realicen operaciones comerciales en LOS
        Sitios.{"\n"}
        Usuario: Persona física, de nacionalidad mexicana o extranjera, mayor de
        edad y con capacidad jurídica suficiente que accede a LOS Sitios, genera
        una cuenta de Usuario particular, identificada mediante el correo
        electrónico provisto por el solicitante y al concluir el protocolo de
        registro, usa de forma única o habitual los servicios de EL OPERADOR,
        por su propio derecho, o;{"\n"}
        Persona moral de nacionalidad mexicana o extranjera legalmente
        constituida, que mediante su representante legal con facultades vigentes
        y suficientes para hacerlo accede a LOS Sitios, genera una cuenta de
        Usuario particular, identificada mediante el correo electrónico provisto
        por el representante y al concluir el protocolo de registro, usa de
        forma única o habitual los servicios de EL OPERADOR.{"\n"}
        CUENTA: Se refiere a los registros individualizados por Usuario en los
        que EL OPERADOR identifica, inscribe y respalda la información de las
        gestiones, operaciones o transacciones realizadas mediante LOS Sitios y
        que es identificada con un nombre o identidad asignada por El Usuario.
        {"\n"}
        Para el uso de LOS SERVICIOS, existen diversos tipos de CUENTAS. El
        Usuario podrá generar una ÚNICA e individualizada a través de LOS Sitios
        cumpliendo con los requisitos de información descritos más adelante para
        cada uno de los tipos o niveles, para finalmente otorgar consentimiento
        sobre LOS TÉRMINOS de acuerdo con lo planteado previamente en el
        presente instrumento. Para estos fines, la persona física o moral,
        deberá facilitar la información, datos personales y documentación que le
        sean solicitados, quedando expresamente prohibido establecer perfiles
        adicionales, auténticos o apócrifos, constituyendo lo anterior violación
        a LOS TÉRMINOS.{"\n"}
        En el supuesto de que el Usuario sea una persona moral, deberá
        contactarnos mediante su Representante Legal al correo electrónico
        support@volabit.com para proveernos adicionalmente la información y/o
        documentación conducente.{"\n"}
        EL OPERADOR aprobará la información y/o documentación recibida y
        autorizará la apertura de la cuenta de la persona moral como Usuario de
        LOS SERVICIOS.{"\n"}
        EL OPERADOR se reserva el derecho de negar el registro y apertura de
        CUENTA y por ende la calidad de Usuario, a cualquier persona física o
        moral que a nuestro exclusivo criterio no cumpla con la idoneidad o
        condiciones para tal hecho en función de nuestras obligaciones y
        derechos.{"\n"}
        Para los UsuarioS que adquieran este carácter posteriormente a la fecha
        de publicación de los presentes TÉRMINOS, su cuenta funcionará para
        ambas PLATAFORMAS. En el caso de UsuarioS con cuenta activa para la
        PLATAFORMA VOLABIT, deberán suscribir de nueva cuenta los presentes
        TÉRMINOS al indicar su interés en usar los servicios ofrecidos mediante
        la PLATAFORMA VEXBI y de forma automática su cuenta se unificará para
        uso indistinto en LOS Sitios.{"\n"}
        OPERACIONES: Se refiere a los actos de comercio de posible realización
        en LOS Sitios que son listados en el apartado IV. Delimitación y Alcance
        de LOS SERVICIOS.{"\n"}
        POSTURAS: Se refiere a la oferta u orden de compra o venta de ACTIVOS
        VIRTUALES o ARES que los UsuarioS realizan mediante la PLATAFORMA VEXBI
        y que EL OPERADOR debe ejecutar de la forma más conveniente para el
        Usuario, al mejor precio o valor disponible en los libros de posturas,
        tal y como se detalla en los subtítulos i. y ii. del l capítulo IV.
        “Operación de la PLATAFORMA VEXBI”.{"\n"}
        LIBRO DE POSTURAS: Se refiere a la relación o lista en la que se
        establecen las POSTURAS de compra o venta de ACTIVOS VIRTUALES o ARES
        por parte de los UsuarioS de la PLATAFORMA VEXBI.{"\n"}
        <Text style={styles.bold}>III. MANIFESTACIONES DE LAS PARTES:</Text>
        {"\n"}III. i. Manifestaciones de EL OPERADOR.{"\n"}• LOS SERVICIOS
        provistos y administrados a través de LOS Sitios son para el uso
        estrictamente personal de mayores de edad y se rigen por los términos y
        condiciones pactados entre Usted como Usuario y Va Digital, S.A.P.I DE
        C.V., (EL OPERADOR) persona moral legalmente constituida al amparo de
        las Leyes mexicanas, con domicilio legal en Atmósfera, Jardines del
        Bosque Centro, Guadalajara, Jalisco, C.P. 44520 como titular y operador
        de los mismos.{"\n"}• No operamos como transmisor de dinero, tampoco
        captamos moneda nacional, moneda extranjera, o cualesquier otros valores
        de los UsuarioS; mantenemos balances en ACTIVOS VIRTUALES que son
        abonados y contabilizados en la cuentas de propiedad de los UsuarioS
        exclusivamente para cubrir las Operaciones o POSTURAS que estos realicen
        mediante LOS Sitios y pueden ser retirados en cualquier momento a
        voluntad del Usuario, siempre y cuando no sean parte de una orden en
        ejecución, sujeto a lo establecido en los presentes TÉRMINOS.{"\n"}• En
        virtud de lo establecido en el punto ii. que antecede, EL OPERADOR no
        paga u otorga intereses ni cualquier otro rendimiento o beneficio
        monetario por el o los saldos que como UsuarioS mantengan o acumulen con
        el tiempo en sus CUENTAS.{"\n"}• En relación con las Operaciones
        realizadas mediante la PLATAFORMA VOLABIT, y para los efectos legales
        conducentes, EL OPERADOR actúa por cuenta del Usuario como gestor de
        ACTIVOS VIRTUALES a su favor en los términos del presente instrumento.
        {"\n"}• Para todos los efectos legales, EL OPERADOR es únicamente
        proveedor de LOS SERVICIOS, por lo que no es parte y queda absolutamente
        excluida tanto de los derechos como de las obligaciones que emanen de
        los actos jurídicos que sean realizados mediante LOS Sitios.{"\n"}• EL
        OPERADOR no tiene control ni responsabilidad, respecto de los productos,
        servicios o bienes intangibles que se obtengan mediante los ACTIVOS
        VIRTUALES gestionados en virtud de LOS SERVICIOS.{"\n"}• Resguarda y
        garantiza la seguridad de la información y documentación relativas a la
        identificación de los UsuarioS o quienes lo hayan sido, así como la de
        aquellos actos, operaciones y servicios de conformidad con nuestra
        política de privacidad y el marco jurídico aplicable.{"\n"}
        III.ii. Manifestaciones del Usuario.{"\n"}
        {"\n"}• El Usuario manifiesta ser mayor de edad y tener la capacidad
        legal suficiente para suscribir y obligarse a lo estipulado en LOS
        TÉRMINOS. En caso de hacer uso de LOS SERVICIOS en incumplimiento de lo
        anterior, EL OPERADOR se reserva el derecho de cancelar su CUENTA de
        forma inmediata aduciendo a la responsabilidad legal de quien ostente su
        patria potestad, tutela, custodia o representación.{"\n"}• Así mismo, el
        Usuario declara bajo protesta de decir verdad que los datos personales
        y/o documentos que ha otorgado para su identificación en los supuestos
        requeridos en LOS Sitios, son auténticos y verificables por EL OPERADOR
        o, en su caso, por las autoridades competentes que conforme a derecho
        así lo requieran; consintiendo en este acto las acciones o consultas que
        con el fin de verificación de la información proporcionada por su
        conducto y en cumplimiento de las obligaciones legales su cargo realice
        EL OPERADOR.{"\n"}• Que conoce y acepta la posibilidad de que EL
        OPERADOR comparta sus datos o información proporcionada como Usuario o
        la de su CUENTA y operaciones en los casos que esto proceda en
        cumplimiento de lo establecido por la LEY FINTECH así como de sus
        obligaciones en materia de Prevención de Lavado de Dinero o
        Financiamiento al Terrorismo (PLD/FT), la Ley Federal para la Prevención
        e Identificación de Operaciones con Recursos de Procedencia Ilícita (Ley
        antilavado) y cualesquiera leyes relacionadas, así como a solicitud
        expresa de autoridad, sin que lo anterior implique trasgresión alguna a
        la obligación de confidencialidad, ni constituirá violación a las
        restricciones de revelación de información establecidas en nuestra
        política de privacidad.{"\n"}• El Usuario se obliga a utilizar LOS
        SERVICIOS con fines y recursos lícitos, sin afectar derechos de terceros
        y con apego a las leyes vigentes en México o en el país en que se
        encuentre al momento de utilizar los mismos.{"\n"}• El Usuario
        manifiesta que ha leído LOS TÉRMINOS, que estos son claros y ha
        comprendido sus derechos y obligaciones, su alcance y contenido total
        con independencia de su orden o división en capítulos y que operará su
        CUENTA con apego a los mismos.{"\n"}• El Usuario manifiesta que ha
        recibido información clara y comprende el alcance de LOS SERVICIOS, así
        como del funcionamiento de LOS Sitios, pudiendo acceder a la sección de
        preguntas y respuestas que los mismos albergan, o en su caso contactar a
        nuestro personal de atención al cliente para clarificar y detallar dicha
        información.{"\n"}• Que entiende y acepta que la operación de LOS
        SERVICIOS se basa en USDC, y está conforme con la conversión inmediata
        que EL OPERADOR realice al tipo de cambio establecido en
        https://www.centre.io/usdc, de confomirdad con LOS TÉRMINOS.{"\n"}• Para
        el supuesto de CUENTA de persona moral como Usuario, el representante
        legal declara bajo protesta de decir verdad y en ejercicio de su
        representación que sus facultades no han sido limitadas o revocadas y
        que su representada acepta universalmente LOS TÉRMINOS mediante su
        representación.{"\n"}• Acepta y reconoce que es su exclusiva
        responsabilidad el uso que haga de LOS SERVICIOS y que en todo caso
        deberá utilizarlos de conformidad a las funcionalidades que se ofrecen y
        permiten en LOS Sitios en los términos del presente acuerdo, por lo que
        en caso contrario y desde este momento asume las consecuencias jurídicas
        que deriven de la violación o contravención a los usos autorizados.
        {"\n"}• El Usuario es el único responsable de comprender y dar
        cumplimiento al marco jurídico aplicable en su jurisdicción relativo al
        uso que haga de LOS SERVICIOS de forma enunciativa, más no limitativa, a
        todo aquello relacionado con las pautas y regulaciones respecto de los
        ACTIVOS VIRTUALES, así como el entero y pago de impuestos que pudiesen
        derivarse de las operaciones relacionadas y/o gestiones encargadas.
        {"\n"}• Que reconoce y declara que no figura en la “Lista de personas
        bloqueadas” que emite e informa la Secretaría de Hacienda y Crédito
        Público (SHCP) del Poder Ejecutivo Federal de México, así como tampoco
        en otra lista de sanciones comerciales o económicas, como la Lista de
        Sanciones del Consejo de Seguridad de las Naciones Unidas, listas SDNT
        (Significant Designated Narcotics Traffickers - SDNT List), SFNT y
        KingPin Act, de la OFAC (Oficina para el Control de Activos
        Extranjeros), del Departamento del Tesoro de EE.UU. y su equivalente en
        otras jurisdicciones o países.{"\n"}• Que comprende que la
        responsabilidad y obligaciones de EL OPERADOR implican únicamente lo
        aquí expresado, y conoce plenamente los riesgos implícitos en el uso,
        adquisición o realización de actos de comercio con ACTIVOS VIRTUALES y/o
        ARES que pudieran realizar mediante los Sitios, teniendo pleno
        conocimiento de lo siguiente:{"\n"}• Ni el Gobierno Federal ni las
        entidades de la administración pública paraestatal podrán
        responsabilizarse o garantizar los recursos que sean utilizados en
        ninguna de las Operaciones que se celebren en LOS Sitios ni con EL
        OPERADOR ni frente a otros, así como tampoco asumir alguna
        responsabilidad por las obligaciones contraídas por conducto de EL
        OPERADOR o por algún Usuario o cliente frente a otro, en virtud de las
        OPERACIONES que celebren.{"\n"}• Los ACTIVOS VIRTUALES no son moneda de
        curso legal y no están respaldados por el Gobierno Federal ni por el
        Banco de México;{"\n"}• La imposibilidad de revertir las operaciones una
        vez ejecutadas;{"\n"}• La volatilidad del valor de los ACTIVOS VIRTUALES
        y/o ARES, y{"\n"}• Los riesgos tecnológicos, cibernéticos y de fraude
        inherentes a los ACTIVOS VIRTUALES y/o ARES.{"\n"}
        <Text style={styles.bold}>
          IV. Delimitación y Alcance de LOS SERVICIOS:{" "}
        </Text>
        Mediante LOS Sitios, EL OPERADOR provee LOS SERVICIOS, mismos que a
        continuación se delimitan describiendo su alcance y efectos para cada
        una de las PLATAFORMAS:{"\n"}
        IV. i. Mediante la PLATAFORMA VOLABIT.{"\n"}
        Se proveen servicios que implican la gestión por parte de EL OPERADOR de
        ACTIVOS VIRTUALES y/o ARES por encargo y cuenta del Usuario.{"\n"}
        Nuestros servicios de gestión en la PLATAFORMA VOLABIT consisten en las
        siguientes operaciones:{"\n"}• Conversión de dinero fiduciario a USDC
        que EL OPERADOR conservará y contabilizará en la CUENTA del Usuario como
        balance para realizar las operaciones 2 y 3 por encargo de éste, en los
        términos del presente instrumento.{"\n"}• Compraventa de los ACTIVOS
        VIRTUALES gestionados en la PLATAFORMA.{"\n"}• Recepción y/o transmisión
        de los ACTIVOS VIRTUALES gestionados en la PLATAFORMA.{"\n"}• Envío o
        transferencia inmediata del dinero fiduciario producto del punto 2 que
        antecede, a la cuenta bancaria de la titularidad del Usuario relacionada
        al darse de alta en LOS Sitios.{"\n"}
        IV. i. i. Operación de la PLATAFORMA VOLABIT.{"\n"}
        En virtud de lo anterior, EL Usuario comisiona a EL OPERADOR para que
        actúe por encargo y a su cuenta para realizar gestiones u operaciones en
        o de ACTIVOS VIRTUALES y/o ARES que constituyen LOS SERVICIOS mediante
        el uso de esta plataforma, así como de los programas de aplicación
        disponibles en LOS Sitios.{"\n"}
        Nuestra operación está basada en USDC, para realizar el encargo del
        Usuario, EL OPERADOR realizará la conversión inmediata de pesos a este
        ACTIVO VIRTUAL de conformidad con el punto IV. i. que antecede, así como
        lo establecido en los puntos ii. y iii. del capítulo de manifestaciones
        del Usuario y les dará el uso estrictamente indicado.{"\n"}
        EL OPERADOR no realiza gestiones discrecionales, especulativas o a
        cuenta propia. Por el contrario, únicamente realizará las gestiones que
        el Usuario le instruya mediante los procesos y/o funciones permitidos,
        activados y claramente detallados en la PLATAFORMA, al solicitar el
        segundo la ejecución de las mismas.{"\n"}
        EL OPERADOR será responsable en los términos de este instrumento de
        conservar los ACTIVOS VIRTUALES propiedad del Usuario para la ejecución
        de alguno de LOS SERVICIOS establecidos como 2 o 3.{"\n"}
        Después de ejecutada la gestión(es) encargada(s), EL OPERADOR rendirá
        cuenta de su cumplimiento y enterará al Usuario del balance de sus
        ACTIVOS VIRTUALES mediante los registros de su CUENTA.{"\n"}
        El tipo o nivel de CUENTA creada por el Usuario conforme a las
        especificaciones establecidas en LOS Sitios determinará los límites
        respecto de los montos permitidos para la gestión de LOS SERVICIOS.
        {"\n"}
        Si por causas imputables o no imputables a EL OPERADOR, LOS SERVICIOS se
        realizan con alteraciones, defectos o error, este los ejecutará
        nuevamente en los términos encargados por el Usuario sin tener
        responsabilidad frente a este.{"\n"}
        Si a juicio de EL OPERADOR, una circunstancia extraordinaria e
        imprevista hiciere perjudicial la ejecución de la gestión encargada por
        el Usuario respecto a cualquiera de LOS SERVICIOS, podrá suspender el
        cumplimiento de la misma, comunicándose al segundo la causa a la
        brevedad.{"\n"}
        IV. ii. Mediante la PLATAFORMA VEXBI.{"\n"}
        EL OPERADOR provee una interfaz o plataforma digital para que el Usuario
        realice operaciones de compra y/o venta en línea de los ACTIVOS
        VIRTUALES o ARES que se encuentran disponibles en los LIBROS DE POSTURAS
        publicados en la PLATAFORMA VEXBI mediante los siguientes tipos de
        POSTURAS:{"\n\n"}• Activo virtual por Activo virtual (cripto to cripto).
        {"\n"}• Activo virtual por dinero fiduciario.{"\n\n"}
        Nuestra operación está basada en USDC; para realizar las operaciones
        descritas, se proveen asimismo servicios que implican las siguientes
        gestiones por parte de EL OPERADOR a nombre y cuenta del Usuario:
        {"\n\n"}• Conversión inmediata de dinero fiduciario a USDC, ACTIVOS
        VIRTUALES que EL OPERADOR conservará y contabilizará en la CUENTA del
        Usuario como fondo para realizar POSTURAS, en los términos del presente
        instrumento.{"\n"}• Custodia de ACTIVOS VIRTUALES gestionados en la
        PLATAFORMA, que EL OPERADOR conserva exclusivamente para realizar las
        operaciones habilitadas en la PLATAFORMA VEXBI.{"\n"}• Retiro de ACTIVOS
        VIRTUALES así como envío o transferencia inmediata del dinero fiduciario
        producto de las POSTURAS que lo incluyan, a la cuenta bancaria de la
        titularidad del Usuario relacionada al darse de alta en LOS Sitios.
        {"\n"}
        IV. ii. i. Operación de la PLATAFORMA VEXBI.{"\n"}
        La mecánica de operación de la PLATAFORMA permite al Usuario acceder a
        un mercado de ACTIVOS VIRTUALES o ARES en el que podrá visualizar los
        LIBROS DE POSTURAS habilitados para identificar las operaciones de
        compra y/o venta que pueden ser efectuadas.{"\n"}
        Cualquier persona que acceda a la PLATAFORMA puede visualizar los LIBROS
        DE POSTURAS. Sin embargo, para colocar cualquier POSTURA y efectuar
        operaciones, es necesario ser Usuario.{"\n"}
        Los UsuarioS con CUENTAS vigentes (con las limitaciones inherentes al
        tipo de cuenta de que se trate) en LOS Sitios, podrán colocar POSTURAS
        de compra o venta en los LIBROS DE POSTURAS habilitados por EL OPERADOR,
        siempre y cuando estas estén totalmente cubiertas por los fondos en sus
        CUENTAS.{"\n"}
        En ese sentido, previamente a realizar cualquier POSTURA el Usuario
        deberá acreditar y mantener un saldo o fondo en ACTIVOS VIRTUALES en su
        CUENTA con el fin de realizar operaciones en la PLATAFORMA.{"\n"}
        Una vez que el Usuario coloca una POSTURA, EL OPERADOR retendrá en su
        CUENTA el saldo en ACTIVOS VIRTUALES que cubra la misma, mientras esta
        no sea retirada por el Usuario o se efectúe la operación parcial o
        totalmente. {"\n"}Sistemáticamente la PLATAFORMA no publicará la POSTURA
        si no hay saldo suficiente para cubrirla. Los fondos en ACTIVOS
        VIRTUALES retenidos en relación con una o varias POSTURAS no estarán
        disponibles para cualquier otro SERVICIO ofrecidos en LOS Sitios.{"\n"}
        Mientras las POSTURAS estén publicadas o colocadas en un LIBRO DE
        POSTURAS serán vigentes y obligatorias. En caso de que el Usuario no
        desee o no tenga más interés en mantener LA POSTURA deberá cancelarla de
        forma inmediata. Una vez efectuada cualquier operación, esta será
        irreversible.{"\n"}
        Cuando en el LIBRO DE POSTURAS, EL OPERADOR identifique y concilie en
        las mejores condiciones disponibles, parcial o totalmente, una POSTURA
        de un Usuario con una o varias POSTURAS de otro u otros UsuarioS,
        efectuará la operación y de forma inmediata realizará la transmisión de
        los fondos correspondientes a la o las operaciones entre los UsuarioS
        involucrados.{"\n"}
        Cuando la operación sea efectuada por EL OPERADOR, generará a su favor
        el cobro de la comisión descrita en el capítulo V. Comisiones.{"\n"}
        En virtud de la dinámica de la PLATAFORMA y de las posturas disponibles
        en los LIBROS DE POSTURAS, es posible que algunas POSTURAS no se
        consumen o ejecuten en una sola operación, sino que requieren de
        múltiples POSTURAS (ofertas de compra o venta) complementarias de otros
        UsuarioS para ser completadas. En este supuesto, seguirán retenidos en
        su CUENTA los fondos en ACTIVOS VIRTUALES necesarios para completar el
        remanente no conciliado de su POSTURA.{"\n"}
        El funcionamiento de la PLATAFORMA VADI depende del interés de los
        UsuarioS en realizar POSTURAS, por lo que de ninguna forma será
        responsabilidad de EL OPERADOR la compra o venta de los ACTIVOS
        DIGITALES o ARES por parte de otros UsuarioS. En este sentido, no es
        posible asegurar que las POSTURAS se ejecuten, aunque las condiciones de
        las mismas sean similares o competitivas en el mercado.{"\n"}
        EL OPERADOR únicamente facilita a sus UsuarioS el uso de la PLATAFORMA
        VADI y la realización de las operaciones ahí permitidas, no es un
        vendedor, comprador, asesor de inversión o gestor de POSTURAS por cuenta
        de los UsuarioS. En todo caso las POSTURAS son colocadas por el Usuario
        bajo su criterio, autonomía y responsabilidad, por lo que EL OPERADOR no
        tendrá ninguna responsabilidad en esos sentidos, como tampoco la tendrá
        por el uso o la interpretación que el Usuario haga de la información
        publicada en LOS Sitios u otros medios de comunicación.{"\n"}
        Los ACTIVOS VIRTUALES o ARES utilizados en las operaciones realizadas en
        la PLATAFORMA son propiedad de los UsuarioS y las POSTURAS que coloquen
        pueden colocarse o retirarse de los LIBROS DE POSTURAS en el momento que
        estos lo decidan, siempre y cuando estas no hubiesen sido conciliadas
        total o parcialmente por la PLATAFORMA.{"\n"}
        EL OPERADOR se reserva el derecho de cerrar LIBROS DE POSTURAS, lo que
        deriva en cancelar todas las POSTURAS de UsuarioS relacionadas con el
        mismo.{"\n"}
        Los ARES, así como los ACTIVOS VIRTUALES y sus denominados FORKS, objeto
        de las operaciones a realizar en la PLATAFORMA, serán determinados a
        discreción de EL OPERADOR en cumplimiento de lo autorizado por el Banco
        de México o autoridades competentes, así como de la legislación
        aplicable.{"\n"}
        IV. ii. ii. Creadores de Mercado (Market makers) en la PLATAFORMA VADI.
        {"\n"}
        EL OPERADOR podrá involucrar creadores de mercado como UsuarioS de la
        PLATAFORMA VEXBI con el objetivo de proveer liquidez, los cuales podrán
        obtener comisiones preferentes para lograr el fin citado.{"\n"}
        <Text style={styles.bold}>V. Seguridad en LOS Sitios.</Text>
        {"\n"}V. i. Medidas de seguridad de carácter legal, usos autorizados y
        responsabilidad del Usuario dentro de las PLATAFORMAS.{"\n"}
        Los servicios ofrecidos en LOS Sitios son para el uso estrictamente
        personal de mayores de edad. La CUENTA es y debe ser siempre de carácter
        personal e intransferible, por lo que el Usuario no podrá vender o ceder
        a favor de terceros el uso de la misma.{"\n"}
        Para la operación de LOS SERVICIOS ofrecidos en LOS Sitios no contamos
        con seguros, fideicomisos o niveles mínimos de capitalización, por lo
        que no se otorga garantía alguna respecto de la liquidez o certeza de
        las operaciones realizadas en las PLATAFORMAS, sin tener responsabilidad
        por estos hechos.{"\n"}
        Mediante LOS Sitios, EL OPERADOR únicamente facilita el comercio de
        ACTIVOS VIRTUALES a través de las operaciones relatadas en el Alcance de
        LOS SERVICIOS, no capta ni coloca recursos o dinero fiduciario, tampoco
        genera intereses o rendimientos, por lo que de ninguna forma ni en
        ningún momento el Usuario podrá reclamar tales conceptos. En virtud de
        lo anterior, los ACTIVOS VIRTUALES en las cuentas se conservan por parte
        de EL OPERADOR exclusivamente para los fines descritos en los presentes
        TÉRMINOS, sin adquirir el carácter de depositario.{"\n"}
        Al momento de ser considerado un Usuario, y por el sólo hecho de serlo,
        usted declara que está actuando por cuenta propia y NO por cuenta,
        orden, ni en representación de un tercero, en ningún caso y bajo ninguna
        circunstancia, y reconoce que, conforme a los presentes TÉRMINOS, le
        está prohibido permitir que otra persona use la cuenta, que un tercero
        se ostente con credenciales de acceso propias del Usuario verificado o
        actuar por cuenta de cualquier tercero.{"\n"}
        De igual forma queda expresamente convenido que únicamente podrán
        realizarse conversiones de pesos a USDC por conducto y a favor del
        Usuario como titular de la CUENTA, quedando prohibido solicitar a EL
        OPERADOR cualquier encargo o gestión de ACTIVOS VIRTUALES a favor de
        terceros, salvo acuerdo expreso que lo autorice. Asimismo reconoce que,
        en caso de que se detecte que un Usuario está violando lo dispuesto en
        el párrafo inmediato anterior, se le suspenderá el acceso a su CUENTA,
        será sujeto a un proceso de revisión y reporte de sus operaciones y EL
        OPERADOR tendrá el derecho de iniciar en su contra cualquier acción que
        corresponda, conforme a lo previsto por cualquiera de las disposiciones
        aplicables.{"\n"}
        De conformidad con los montos de las operaciones en ACTIVOS VIRTUALES y
        saldos en su CUENTA, EL OPERADOR podrá solicitar datos personales o
        documentación adicional e informar a la autoridad competente de dichas
        gestiones, de conformidad con lo dispuesto por la Ley Federal para la
        Prevención e Identificación de Operaciones con Recursos de Procedencia
        Ilícita.{"\n"}
        EL Usuario es el único responsable de comprender y dar cumplimiento al
        marco jurídico aplicable en su jurisdicción, relativo al uso que haga de
        LOS SERVICIOS.{"\n"}
        EL OPERADOR se reserva el derecho de seleccionar sus mercados y
        jurisdicciones para operar y puede restringir o denegar LOS SERVICIOS a
        UsuarioS de ciertos países, particularmente los que se encuentren dentro
        de la Lista de Sanciones del Consejo de Seguridad de las Naciones
        Unidas, listas SDNT (Significant Designated Narcotics Traffickers - SDNT
        List), SFNT y KingPin Act, de la OFAC (Oficina para el Control de
        Activos Extranjeros) del Departamento del Tesoro de EE.{"\n"}UU. y su
        equivalente en otras jurisdicciones o países, así como en las
        jurisdicciones catalogadas como de alto riesgo y no cooperantes, o en
        aquellas con deficiencias considerables en sus regímenes de prevención
        de lavado de dinero y financiamiento al terrorismo, que no han hecho
        suficientes progresos en el tratamiento de las mismas, publicadas en las
        listas del Grupo de Acción Financiera Internacional (GAFI).{"\n"}
        De igual forma, el acceso a LOS Sitios y el uso de LOS SERVICIOS está
        prohibido si este se realiza en aquellas jurisdicciones en donde el uso
        y/o comercio de y con ACTIVOS VIRTUALES no sea permitido o sea
        restringido por su legislación positiva.{"\n"}
        En caso de contravención a lo anterior, nos reservamos el derecho de
        cancelar las CUENTAS y no prestar LOS SERVICIOS a los UsuarioS en este
        supuesto. El Usuario al que se le niegue la prestación de los servicios,
        no deberá usar ni acceder a LOS Sitios ni a ninguno de sus servicios.
        {"\n"}
        V.ii. Medidas de seguridad de carácter técnico, usos autorizados y
        responsabilidad del Usuario dentro de las PLATAFORMAS.{"\n"}
        Normalmente, y debido a su naturaleza y procesos informáticos, LOS
        SERVICIOS una vez encargados por el Usuario, son concretados con
        carácter inmediato por parte de EL OPERADOR. No obstante lo anterior,
        algunas de las gestiones pueden sufrir retraso en virtud de los tiempos
        y limitantes de nuestros prestadores de servicios o proveedores
        externos, por lo que EL OPERADOR no asegura el tiempo en el que se
        realizarán las gestiones encargadas por EL Usuario, y la acreditación de
        las mismas puede retrasarse. En virtud de lo anterior, el Usuario acepta
        el riesgo respecto a los retrasos que puedan sufrir las operaciones que
        constituyen LOS SERVICIOS, liberando a EL OPERADOR de cualquier
        responsabilidad derivada del retraso referido. {"\n"}Sin embargo, EL
        OPERADOR realizará las gestiones técnicamente posibles para que dichos
        tiempos sean los menores y más eficientes. EL OPERADOR garantiza la
        calidad técnica de LOS SERVICIOS a favor de EL Usuario, realizando de
        buena fe y de manera diligente los actos y/o procedimientos y/o acciones
        que sean requeridos y/o necesarios para el óptimo desempeño de las
        gestiones encargadas, realizando el mantenimiento y seguimiento que sea
        necesario hasta su finalización.{"\n"}
        VOLABIT no garantiza la disponibilidad, permanencia y continuidad de la
        operación de LOS Sitios y de la gestión de LOS SERVICIOS, en caso de
        imposibilidad técnica o legal, por lo que EL Usuario lo libera de
        cualquier responsabilidad por cualquier daño o perjuicio de cualquier
        naturaleza que considere que pueda surgir derivado de lo anterior,
        siempre y cuando EL OPERADOR concluya las gestiones encargadas en los
        términos aquí establecidos.{"\n"}
        EL Usuario reconoce que es y en todo tiempo será el responsable único y
        final de proteger y mantener en secreto la información de sus cuentas,
        contraseñas personales, claves de acceso y números confidenciales o
        cualquier otro código con los cuales tiene acceso a LOS Sitios, así como
        a las páginas de los proveedores externos o terceros relacionadas con
        LOS Sitios.{"\n"}
        EL OPERADOR no será tampoco responsable de daños o perjuicios que EL
        Usuario pudiera sufrir con motivo de proporcionar información inexacta o
        errónea, derivada de omisión, distracción o error tipográfico, al
        momento de realizar el encargo de cualesquiera de los Servicios o al
        hacer uso de LOS Sitios.{"\n"}
        EL Usuario es consciente que debido a la naturaleza abierta de Internet
        y sus cualidades técnicas, el control de fallas en la función de LOS
        Sitios es incierta y se encuentra fuera del control de EL OPERADOR, por
        lo que lo libera expresamente de toda responsabilidad, de cualquier daño
        o perjuicio que pudiere llegar a sufrir por dichas fallas.{"\n"}
        No obstante lo anterior, EL OPERADOR realizará las gestiones que estén a
        su alcance, restituyendo la permanencia, continuidad, disponibilidad o
        funcionamiento de LOS Sitios en cuanto sea técnicamente posible.{"\n"}
        El funcionamiento de las diferentes cadenas de bloques que soportan los
        ACTIVOS VIRTUALES y ARES habilitados en las PLATAFORMAS no depende de EL
        OPERADOR.{"\n"}
        En virtud de lo anterior, El Usuario expresamente libera a EL OPERADOR
        de toda responsabilidad que devenga de los siguientes supuestos: •
        Retrasos en la acreditación o retiro de fondos.{"\n"}• Pérdida parcial o
        total de los activos sustentados en una blockchain o de su valor,
        derivada de falla en el protocolo, desaparición, abandono, fraude,
        inoperancia o bifurcación de la misma, o en caso de confiscación por
        autoridad competente de los activos o valores representados en la o las
        cadenas de bloques involucradas.{"\n"}
        Derivado de lo anterior, el Usuario reconoce y acepta que los ACTIVOS
        VIRTUALES pueden desaparecer o no emitirse más, y puede que no existan
        ofertas públicas ni mercado en la PLATAFORMA para la realización de
        operaciones con los mismos, por lo que EL OPERADOR no tendrá
        responsabilidad alguna en ese sentido y el Usuario renuncia a cualquier
        acción en este sentido a ejercer en contra de EL OPERADOR.{"\n"}
        <Text style={styles.bold}>VI. Comunicaciones.</Text>
        {"\n"}Toda notificación, declaración, o aviso, deberá ser siempre por
        escrito a las direcciones de correo electrónico registradas en la
        membresía o perfil de EL Usuario y al siguiente correo por parte de EL
        OPERADOR: support@vadi.com{"\n"}
        En virtud de lo anterior, el Usuario es responsable de mantener su
        dirección de correo electrónico y otra información de identificación
        personal y/o contacto actualizado en su CUENTA, liberando a EL OPERADOR
        de cualquier responsabilidad relacionada con la falta de actualización
        de información o la desactivación o saturación de sus direcciones de
        correo electrónico registradas.{"\n"}
        EL Usuario acepta que cualquier información remitida por EL OPERADOR que
        no fuese recibida porque su correo electrónico registrado es incorrecto,
        está desactualizado, saturado o bloqueado, o las mismas han sido
        filtradas por el administrador de sus cuentas, se tendrán como debida y
        legalmente notificadas.{"\n"}
        <Text style={styles.bold}>VII. Comisiones.</Text>
        {"\n"}
        En calidad de remuneración por la gestión de LOS SERVICIOS encargados
        mediante LOS Sitios y objeto del presente acuerdo, EL OPERADOR cobra las
        siguientes comisiones o cuotas diferenciadas conforme a los alcances
        descritos en este instrumento y dentro de LOS Sitios:{"\n"}
        El Usuario se obliga incondicionalmente, a pagar las comisiones
        aplicables EL OPERADOR descritas en la siguiente liga:{"\n"}
        www.volabit.com/fees{"\n"}
        EL OPERADOR se reserva el derecho de hacer el descuento respectivo de
        las comisiones o cuotas descritas en las ligas.{"\n"}
        <Text style={styles.bold}>
          VIII. Abandono o negativa en la prestación de LOS SERVICIOS.{"\n"}
        </Text>
        EL OPERADOR tendrá la facultad de dar por terminado el presente acuerdo
        en el momento que lo determine sin responsabilidad a su cargo, debiendo
        siempre concluir las órdenes o gestiones encargadas por el Usuario en
        los términos del presente instrumento, previamente al anuncio de la
        conclusión.{"\n"}
        Por su parte el Usuario podrá concluir o revocar el mandato encargado a
        EL OPERADOR en el momento que lo decida, al suspender o cancelar su
        CUENTA y con ello dejar de hacer uso de LOS Sitios, o simplemente por
        dejar de hacer uso de los Sitios, quedando siempre obligado a las
        resultas de las comisiones ya practicadas.{"\n"}
        En ambos casos, y como finiquito de esta relación, los términos de
        retiro consistirán en la obligación del Usuario de retirar los montos o
        saldos en ACTIVOS VIRTUALES que mantuviera en LOS Sitios con relación a
        alguno de LOS SERVICIOS, ya sea retirando a una cartera o wallet o
        liquidando por pesos, liberando de cualquier responsabilidad a EL
        OPERADOR en caso de no concretarlo.{"\n"}
        En el supuesto de abandono de CUENTA por parte del Usuario, EL OPERADOR
        conservará los ACTIVOS VIRTUALES en las CUENTAS de los UsuarioS,
        enviándolos en su caso a una cuenta concentradora o global en caso de
        que estas no tengan movimiento alguno por el lapso de dos años y pasando
        un plazo de tres años (un año más), prescribirán en favor del patrimonio
        de la beneficencia pública.{"\n"}
        <Text style={styles.bold}>
          IX. Negativa en la ejecución del encargo.
        </Text>
        {"\n"}EL OPERADOR tiene el derecho a negar, restringir, suspender o
        cancelar al Usuario el acceso a su CUENTA total o parcialmente, de
        manera temporal o definitiva, en cualquier momento y sin necesidad de
        previo aviso, si el Usuario incumple cualquiera de las estipulaciones
        contenidas en LOS TÉRMINOS, si realiza cualquier otro acto contrario a
        las leyes aplicables vigentes, si no pudiera verificarse su identidad,
        si cualquier información proporcionada por el mismo fuere falsa o por
        cualquier otra causa, a entera discreción de EL OPERADOR.{"\n"}
        EL OPERADOR comunicará vía correo electrónico al Usuario su negativa
        para la gestión o prestación de LOS SERVICIOS, determinando el tipo de
        restricción, suspensión o cancelación a la que el segundo se ha hecho
        acreedor. En cualquiera de estos supuestos, EL OPERADOR reintegrará los
        ACTIVOS VIRTUALES que en su caso el Usuario tuviera en su cuenta en los
        términos de este instrumento.{"\n"}
        En cualquiera de estos supuestos, EL OPERADOR conservará los saldos del
        Usuario que en su caso mantuviera en depósito en los términos de este
        instrumento y los reintegrará.{"\n"}
        EL OPERADOR estará obligado a reintegrar al Usuario los ACTIVOS
        VIRTUALES que en su caso conserve en razón del encargo realizado por el
        Usuario, de conformidad con los términos de retiro descritos en el punto
        VIII que antecede.{"\n"}
        <Text style={styles.bold}>X. Confidencialidad.</Text>
        {"\n"}EL OPERADOR mantendrá y resguardará la información que le sea
        entregada o comunicada por el Usuario con carácter confidencial, en
        términos de las disposiciones legales aplicables en los Estados Unidos
        Mexicanos. Por lo anterior, se obliga a tomar las providencias
        necesarias para que las personas que en su caso tengan acceso a la
        información con motivo o como consecuencia de la las gestiones
        encargadas de conformidad con estos términos, no la divulguen y que
        terceras personas ajenas a las partes no tengan acceso a ella.{"\n"}
        Sin perjuicio de lo anterior, EL OPERADOR no tendrá la obligación de
        mantener con carácter confidencial cualquier información que el Usuario
        le proporcione que sea de cualquier forma pública o que no deba
        considerarse como confidencial en los términos citados.{"\n"}
        La información que no revista carácter confidencial podrá ser utilizada,
        publicada, reproducida, divulgada, comunicada públicamente y transmitida
        por EL OPERADOR de conformidad con lo establecido en el artículo 109 de
        la Ley Federal de los Derechos de Autor y de la fracción I, del artículo
        76 bis de la Ley Federal de Protección al Consumidor.{"\n"}
        <Text style={styles.bold}>XI. Fuerza mayor o caso fortuito.</Text>
        {"\n"}
        EL OPERADOR estará exento de toda responsabilidad en caso de retraso,
        mora o incumplimiento total o parcial de las obligaciones establecidas
        en el presente contrato, debido a causas de fuerza mayor o caso
        fortuito, acordándose que al desaparecer éstas, las partes determinarán
        la conveniencia de continuar el presente acuerdo o darlo por concluido.
        En caso de continuar, las partes deberán acordar las nuevas condiciones
        para su desarrollo.{"\n"}
        <Text style={styles.bold}>XII. Derechos intelectuales.</Text>
        {"\n"}Los derechos de propiedad industrial e intelectual que se
        desprenden de LOS SERVICIOS y los diseños y dominios de LOS Sitios, así
        como los derechos de uso y explotación de los mismos, son propiedad
        exclusiva de EL OPERADOR, por lo que EL Usuario no adquiere ni podrá
        adquirir derecho alguno de propiedad intelectual (Derechos de autor o
        propiedad industrial) por el hecho de hacer uso de LOS Sitios y en
        ningún momento dicho uso será considerado como una autorización ni
        licencia para utilizar LOS SERVICIOS con fines distintos a los
        establecidos en los presentes términos de uso.{"\n"}
        <Text style={styles.bold}>XIII. Modificaciones.</Text>
        {"\n"}Como se ha establecido previamente, EL OPERADOR tiene derecho de
        modificar en cualquier momento los presentes TÉRMINOS. En consecuencia,
        el Usuario deberá atender nuestras notificaciones de actualización, ya
        sea personalizadas o publicadas en LOS Sitios, y preferentemente leer
        con atención nuestro Aviso Legal, Términos de Uso y Política de
        Privacidad cada vez que desee utilizar LOS Sitios.{"\n"}
        La versión actualizada de los TÉRMINOS suple a todas las versiones
        precedentes. Es posible que algunos de LOS SERVICIOS que se ofrecen a
        través de LOS Sitios estén sujetos a condiciones particulares que
        sustituyen, completan y/o modifican los Términos de Uso que se
        establecen en este documento. Por lo tanto, el Usuario también deberá
        leer atentamente dichas condiciones particulares, con anterioridad al
        encargo de LOS SERVICIOS directamente a EL OPERADOR o aquellos
        proporcionados por proveedores externos.{"\n"}
        <Text style={styles.bold}>
          XIV. Jurisdicción y Legislación aplicable.
        </Text>
        {"\n"}Para la interpretación, cumplimiento y ejecución del presente
        acuerdo, las partes convienen que serán aplicables las Leyes federales
        de los Estados Unidos Mexicanos y competentes los tribunales del estado
        de Nuevo León, salvo que por ministerio de ley pudiese corresponder un
        fuero distinto.{"\n\n"}
        <View style={{ paddingLeft: 60 }}>
          <Text style={{ fontFamily: "NunitoSans_400Regular" }}>
            {"\n"}Aviso de Usos de Plataforma
          </Text>
        </View>
        <Text style={{ fontFamily: "NunitoSans_400Regular" }}>
          {"\n\n"}
          Los presentes Avisos (Términos y condiciones de uso, Aviso Legal, y
          Aviso de Privacidad, en su conjunto los “Avisos”) son publicados por
          VADI con la finalidad de cumplir con las obligaciones establecidas en
          la “Ley para Regular las Instituciones de Tecnología Financiera” y su
          legislación secundaria, regulación integrante del derecho positivo
          mexicano que impacta el marco legal de nuestros servicios.{"\n\n"}
          De conformidad con la legislación secundaria de la “Ley para Regular
          las Instituciones de Tecnología Financiera”, se determinó que nuestro
          modelo operativo no era elegible para solicitar autorización para
          llevar a cabo operaciones como Institución de Tecnología Financiera
          (“ITF”) en su modalidad de plataforma de fondos de pago electrónico,
          por lo que con apego a dicha regulación a partir de la fecha de
          publicación de estos términos continuaremos con nuestra operaciones
          y/o servicios habituales con activos virtuales directamente con
          nuestros Usuarios o clientes.{"\n\n"}
          En virtud de lo anterior, nuestra operación comercial no es una
          actividad supervisada por las autoridades financieras mexicanas, pero
          sí legal, formal y regulada, sujeta a diversas obligaciones derivadas
          de la Ley Federal para la Prevención e Identificación de Operaciones
          con Recursos de Procedencia Ilícita (“Ley Antilavado”).{"\n\n"}
          Antes de convertirse en nuestro Usuario o cliente y consentir nuestros
          Avisos, es importante que sepa que ni el Gobierno Federal ni las
          entidades de la administración pública paraestatal podrán
          responsabilizarse o garantizar los recursos que sean utilizados en
          ninguna de las Operaciones que se celebren en nuestra plataforma ni
          con “Va Digital, S.A.P.I. de C.V.” como operador de los servicios, (en
          adelante “VADI”), ni frente a otros, así como tampoco asumir alguna
          responsabilidad por las obligaciones contraídas por nuestro conducto o
          por algún Usuario o cliente frente a otro, en virtud de las
          Operaciones que celebren.{"\n\n"}
          Las condiciones y alcance legal contenidos en los presentes Términos
          de Uso constituyen un contrato de adhesión en línea que implica un
          acuerdo de voluntades entre Usted y VADI el cual es aplicable al uso
          de los servicios que ofrecemos, por lo tanto tiene carácter vinculante
          y es indispensable que, previamente a registrarse en nuestros Sitios y
          adquirir el carácter de Usuario de nuestros servicios, lea, comprenda
          y manifieste su consentimiento respecto a los siguientes:{"\n\n"}
        </Text>
      </Text>
    </>
  );
};

export default TermsConditions;

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
});
