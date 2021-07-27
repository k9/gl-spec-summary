import { SummarizedItem } from "./SummarizedItem";
import { Section } from "./Section";
import { InlineSection } from "./InlineSection";
import { Link } from "./Link";

export function Page() {
  return (
    <>
      <title>Notes on The OpenGL ES Shading Language 1.0 Specification</title>
      <Section heading="Introduction" id="1">
        <p>
          OpenGL ES supports programmable vertex and fragment shaders, using the
          Shading Language.
        </p>
      </Section>
      <SummarizedItem
        id="2"
        heading="Overview of OpenGL ES Shading"
        summary={
          <p>
            The spec defines two closely-related languages for vertex and
            fragment shaders. The languages are referred to as "vertex" and
            "fragment" in the spec. At runtime, Up-to-date OpenGL ES state is
            available to shaders. The shaders process vertices and fragments one
            at a time.
          </p>
        }
      >
        <Section id="2.1" heading="Vertex Processor">
          <p>
            The vertex processor runs vertex shaders which operate on incoming
            vertices, one at a time.
          </p>
        </Section>
        <Section id="2.2" heading="Fragment Processor">
          <p>
            The fragment processor runs on fragments one at a time, and can not
            access other fragments.
          </p>
        </Section>
      </SummarizedItem>
      <SummarizedItem
        id="3"
        heading="Basics"
        summary={
          <p>
            The shading language uses a limited character set. Vertex and
            fragment shaders consist of one or more strings. Compilation of
            shaders is based on c++ compilation. A preprocessor handles
            directives like <code>#ifdef</code> and expands macros such as{" "}
            <code>__VERSION__</code>.
          </p>
        }
      >
        <Section id="3.1" heading="Character Set">
          <p>
            The shading language uses a limited character set, is
            case-sensitive, and has no character or string types.
          </p>
        </Section>
        <Section id="3.2" heading="Source Strings">
          <p>
            Vertex and fragment shaders each consist of a single compilation
            unit, which is made from the compilation of an array of source
            strings. A single vertex shader and a single fragment shader are
            linked together to form a single program.
          </p>
        </Section>
        <Section id="3.3" heading="Logical Phases of Compilation">
          <p>
            Compilation of shaders is based on a subset of the c++ standard. The
            vertex and fragment shaders separately go through steps such as
            preprocessing, tokenization, analysis of grammar, and checking of
            semantics. Then vertex and fragment shaders are linked and a binary
            is generated.
          </p>
        </Section>
        <Section id="3.4" heading="Preprocessor">
          <p>
            There is a preprocessor which processes source strings as part of
            the compilation process. The preprocessor handles directives like{" "}
            <code>#ifdef</code>
            and macros like <code>__VERSION__</code>.
          </p>
          <ul>
            <li>
              <code>#error</code> causes compilation to fail and prints an error
              message.
            </li>
            <li>
              <code>#pragma</code> allows for compiler control.
            </li>
            <li>
              <code>#version</code> specifies the compilation unit's version,
              which defaults to 100, meaning 1.0.
            </li>
            <li>
              <code>#extension</code> controls extensions to the shading
              language, which default to off.
            </li>
            <li>
              Some extensions can choose to be enabled/disabled at a less
              granular level than per-compilation-unit. The linker handles this.
            </li>
            <li>
              Extension names like <code>OES_extension_name</code> are macros
              The macro will be defined if the extension is supported
            </li>
          </ul>
        </Section>
        <Section id="3.5" heading="Comments">
          <p>
            Comments can be multiline <code>\/* ... *\/</code> or single-line{" "}
            <code>\/\/</code>
          </p>
        </Section>
        <Section id="3.6" heading="Tokens">
          <p>
            Tokens can be keywords, identifiers, integer constants, floating
            point constants, or operators.
          </p>
        </Section>
        <Section id="3.7" heading="Keywords">
          <p>
            Various keywords are defined for describing variables, flow control,
            etc.
          </p>
        </Section>
        <Section id="3.8" heading="Identifiers">
          <p>
            Identifiers are used for variable names, function names, etc.
            Identifiers starting with <code>gl_</code> are reserved for use by
            OpenGL ES.
          </p>
        </Section>
      </SummarizedItem>
      <SummarizedItem
        id="4"
        heading="Variables and types"
        summary={
          <p>
            All variables and functions must be defined before being used, and
            be given a type. <code>struct</code>s aggregate a list of types. The
            shading language is type safe with no implicit conversion.
          </p>
        }
      >
        <Section id="4.1" heading="Basic types">
          <p>
            Basic types include bools, ints, and floats; 2, 3 and 4 component
            vectors, matrixes, and texture samplers. These types can be
            aggregated into structs.
          </p>
          <InlineSection id="4.1.1">
            <b>Void</b> is used for an empty return type or parameter list.
          </InlineSection>
          <InlineSection id="4.1.2">
            <b>Booleans</b> hold true/false values.
          </InlineSection>
          <InlineSection id="4.1.3">
            <b>Integers</b> are supported at the language level, but hardware
            may convert them to floats if it doesn't support integers.
          </InlineSection>
          <InlineSection id="4.1.4">
            <b>Floats</b> are supported. Division by zero is undefined but does
            not interrupt or terminate processing.
          </InlineSection>
          <InlineSection id="4.1.5">
            <b>Vectors</b> with 2, 3, or 4 components are supported, and can
            often be mapped to vector operations on the graphics hardware.
          </InlineSection>
          <InlineSection id="4.1.6">
            <b>Matrices</b> with 2x2, 3x3, or 4x4 floating-point elements are
            supported.
          </InlineSection>
          <InlineSection id="4.1.7">
            <b>Samplers</b> are handles to textures. They are passed into
            texture functions to identify a texture.
          </InlineSection>
          <InlineSection id="4.1.8">
            <b>Structures</b> aggregate existing types into user-defined types.
          </InlineSection>
          <InlineSection id="4.1.9">
            <b>Arrays</b> of constant size are supported.
          </InlineSection>
        </Section>
        <Section id="4.2" heading="Scoping">
          <p>GLSL uses statically-nested scopes.</p>
          <Section id="4.2.1" heading="Definition of terms">
            A 'scope' is the region of a shader where a variable is visible.
          </Section>
          <Section id="4.2.2" heading="Types of scope">
            In addition to the global scope, functions and if/else statements
            etc. create nested scopes.
          </Section>
          <Section id="4.2.3" heading="Redeclaring variables">
            Variables with the same name can be redeclared within nested scopes.
            Redeclared variables use separate storage from the overriden
            variable.
          </Section>
          <Section id="4.2.4" heading="Shared globals">
            Uniforms are shared globals that can be accessed across compilation
            units.
          </Section>
          <Section id="4.2.5" heading="Global scope">
            Built-in functions are defined in the outermost scope, and the
            global scope is nested within that outermost scope. User-defined
            functions are defined within the global scope.
          </Section>
          <Section id="4.2.6" heading="Name spaces and hiding">
            Each scope has a name space for variable and function names.
            Declaring a variable or function in an inner scope hides any
            declaration with this the same name in outer scopes. Functions can
            only be declared in the global scope, not nested scopes.
          </Section>
          <Section
            id="4.2.7"
            heading="Redeclarations and Redefinitions Within the Same Scope"
          >
            Redeclaring variables, functions, or structs in a scope is not
            allowed, except that overloaded functions with different signatures
            can share the same name, and a function declaration like{" "}
            <code>void f(int);</code> can be followed by a function declaration
            like <code>void f(int) {"{}"}</code>.
          </Section>
        </Section>
        <Section id="4.3" heading="Storage Qualifiers">
          Variables can specify a storage qualifier before their type. The
          qualifiers are <b>const</b>, <b>attribute</b>, <b>uniform</b>, and{" "}
          <b>varying</b>.
          <Section id="4.3.1" heading="Default Storage Qualifier">
            By default a variable will allocate read/write memory with no link
            to the application or other processors.
          </Section>
          <Section id="4.3.2" heading="Constant Qualifier">
            The <b>const</b> qualifier makes a variable read-only, and const
            variables must be initialized with constant expressions.
          </Section>
          <Section id="4.3.3" heading="Attribute">
            The <b>attribute</b> is used for variables passed to a vertex shader
            on a per-vertex basis. Implementations will have a limit on the
            number of attributes a shader can access.
          </Section>
          <Section id="4.3.4" heading="Uniform">
            The <b>uniform</b> qualifier is used for global variables whose
            values are the same across the entire primitive Implementations will
            have a limit on the number of uniforms a shader can access.
          </Section>
          <Section id="4.3.5" heading="Varying">
            The <b>varying</b> qualifier is used for variables that vertex
            shaders write to per-vertex and fragment shaders read from. The
            fragment shader receives an interpolated value over the primitive
            being rendered.
          </Section>
        </Section>
        <Section id="4.4" heading="Parameter Qualifiers">
          Function parameters can be marked as <b>in</b> for parameters passed
          into a function, <b>out</b> for parameters passed out, or <b>inout</b>{" "}
          for parameters passed both into and out.{" "}
          <Link id="6.1.1">See 6.1.1</Link>
        </Section>
        <Section id="4.5" heading="Precision and Precision Qualifiers">
          <Section id="4.5.1" heading="Range and Precision">
            Minimum ranges and levels of precision are specified for vertex
            shaders, and separate minimums for fragment shaders. Implementations
            may provide more range or precision.
          </Section>
          <Section id="4.5.2" heading="Precision Qualifiers">
            Integer and float declarations can specify <code>highp</code>,
            <code>mediump</code>, and <code>lowp</code> precision qualifiers
            which result in high, medium, or low precision ints and floats.
          </Section>
          <Section id="4.5.3" heading="Default Precision Qualifiers">
            The default precision for ints or floats in a given scope can be set
            with a statement like <code>precision highp float</code>. Global
            default precisions are defined for vertex and fragment shaders,
            except for floats in fragment shaders, for which a precision must be
            set by the shader code.
          </Section>
          <Section id="4.5.4" heading="Available Precision Qualifiers">
            Fragment shader support for <code>highp</code> is optional, and if
            it is supported <code>GL_FRAGMENT_PRECISION_HIGH</code> will be
            equal to <code>1</code>.
          </Section>
        </Section>
        <Section id="4.6" heading="Variance and the Invariant Qualifier">
          By default, optimizations may cause the values of varyings and special
          variables like <code>gl_Position</code> to be different across
          different shaders even though the same code was used to calculate
          them. Variables can be declared to be <b>invariant</b> in order to
          prevent this.
          <Section id="4.6.1" heading="The Invariant Qualifier">
            The invariant qualifier can be applied to existing special variables
            or varyings, or specified while declaring varyings. This can only be
            done in the global scope. For debugging, an invariant pragma exists
            to set all relevant variables to be invariant.
          </Section>
          <Section id="4.6.2" heading="Invariance within Shaders">
            An unchanged variable may have different values within a shader
            since the compiler may choose to recalculate it rather than store
            the value. To prevent this type of invariance, use invariance
            qualifiers or the invariance pragma.
          </Section>
          <Section id="4.6.3" heading="Invariance of Constant Expressions">
            Invariance for constant expressions is guaranteed, as long as the
            expressions are the same and the same precision is used.
          </Section>
          <Section id="4.6.4" heading="Invariance and Linkage">
            The invariance of varyings declared in both the vertex and fragment
            shaders must match. Invariance of some special variables must match
            invariance of other special variables.
          </Section>
        </Section>
        <Section id="4.7" heading="Order of Qualification">
          Qualifiers must be in the following order{" "}
          <code>invariant-qualifier storage-qualifier precision-qualifier</code>{" "}
          or
          <code>storage-qualifier parameter-qualifier precision-qualifier</code>
        </Section>
      </SummarizedItem>
    </>
  );
}
