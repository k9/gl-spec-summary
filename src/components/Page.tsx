import { SummarizedItem } from "./SummarizedItem";
import { Section } from "./Section";

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
            vectors of bools, ints, and floats, matrixes, and texture samplers.
            These types can be aggregated into structs.
          </p>
          <ul>
            <li>
              <b>Void</b> is used for an empty return type or parameter list.
            </li>
            <li>
              <b>Booleans</b> hold true/false values.
            </li>
            <li>
              <b>Integers</b> are supported at the language level, but hardware
              may convert them to floats if it doesn't support integers.
            </li>
            <li>
              <b>Integers</b> are supported at the language level, but hardware
              may convert them to floats if it doesn't support integers.
            </li>
          </ul>
        </Section>
      </SummarizedItem>
    </>
  );
}
