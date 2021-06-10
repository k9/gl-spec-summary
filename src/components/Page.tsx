import { SummarizedItem } from "./SummarizedItem";

export function Page() {
  return (
    <>
      <title>Notes on The OpenGL ES Shading Language 1.0 Specification</title>
      <ol>
        <li>
          <h2>Introduction</h2>
          <p>
            OpenGL ES supports programmable vertex and fragment shaders, using
            the Shading Language.
          </p>
        </li>
        <SummarizedItem
          id="1"
          summary={
            <>
              <h2>Overview of OpenGL ES Shading</h2>
              <p>
                The spec defines two closely-related languages for vertex and
                fragment shaders. The languages are referred to as "vertex" and
                "fragment" in the spec. At runtime, Up-to-date OpenGL ES state
                is available to shaders. The shaders process vertices and
                fragments one at a time.
              </p>
            </>
          }
        >
          <ol>
            <li>
              <h2>Vertex Processor</h2>
              <p>
                The vertex processor runs vertex shaders which operate on
                incoming vertices, one at a time.
              </p>
            </li>
            <li>
              <h2>Fragment Processor</h2>
              <p>
                The fragment processor runs on fragments one at a time, and can
                not access other fragments.
              </p>
            </li>
          </ol>
        </SummarizedItem>
        <SummarizedItem
          id="2"
          summary={
            <>
              <h2>Basics</h2>
              <p>
                The shading language uses a limited character set. Vertex and
                fragment shaders consist of one or more strings. Compilation of
                shaders is based on c++ compilation. A preprocessor handles
                directives like <code>#ifdef</code> and expands macros such as{" "}
                <code>__VERSION__</code>.
              </p>
            </>
          }
        >
          <ol>
            <li>
              <h2>Character Set</h2>
              <p>
                The shading language uses a limited character set, is
                case-sensitive, and has no character or string types.
              </p>
            </li>
            <li>
              <h2>Source Strings</h2>
              <p>
                Vertex and fragment shaders each consist of a single compilation
                unit, which is made from the compilation of an array of source
                strings. A single vertex shader and a single fragment shader are
                linked together to form a single program.
              </p>
            </li>
            <li>
              <h2>Logical Phases of Compilation</h2>
              <p>
                Compilation of shaders is based on a subset of the c++ standard.
                The vertex and fragment shaders separately go through steps such
                as preprocessing, tokenization, analysis of grammar, and
                checking of semantics. Then vertex and fragment shaders are
                linked and a binary is generated.
              </p>
            </li>
            <li>
              <h2>Preprocessor</h2>
              <p>
                There is a preprocessor which processes source strings as part
                of the compilation process. The preprocessor handles directives
                like <code>#ifdef</code>
                and macros like <code>__VERSION__</code>.
              </p>
              <ul>
                <li>
                  <code>#error</code> causes compilation to fail and prints an
                  error message.
                </li>
                <li>
                  <code>#pragma</code> allows for compiler control.
                </li>
                <li>
                  <code>#version</code> specifies the compilation unit's
                  version, which defaults to 100, meaning 1.0.
                </li>
                <li>
                  <code>#extension</code> controls extensions to the shading
                  language, which default to off.
                </li>
                <li>
                  Some extensions can choose to be enabled/disabled at a less
                  granular level than per-compilation-unit. The linker handles
                  this.
                </li>
                <li>
                  Extension names like <code>OES_extension_name</code> are
                  macros The macro will be defined if the extension is supported
                </li>
              </ul>
            </li>
            <li>
              <h2>Comments</h2>
              <p>
                Comments can be multiline <code>\/* ... *\/</code> or
                single-line <code>\/\/</code>
              </p>
            </li>
            <li>
              <h2>Tokens</h2>
              <p>
                Tokens can be keywords, identifiers, integer constants, floating
                point constants, or operators.
              </p>
            </li>
            <li>
              <h2>Keywords</h2>
              <p>
                Various keywords are defined for describing variables, flow
                control, etc.
              </p>
            </li>
            <li>
              <h2>Identifiers</h2>
              <p>
                Identifiers are used for variable names, function names, etc.
                Identifiers starting with <code>gl_</code> are reserved for use
                by OpenGL ES.
              </p>
            </li>
          </ol>
        </SummarizedItem>
        <SummarizedItem
          id="3"
          summary={
            <>
              <h2>Variables and types</h2>
              <p>
                All variables and functions must be defined before being used,
                and be given a type. <code>struct</code>s aggregate a list of
                types. The shading language is type safe with no implicit
                conversion.
              </p>
            </>
          }
        >
          <ol>
            <li>
              <h2>Basic types</h2>
              <p>
                Basic types include bools, ints, and floats; 2, 3 and 4
                component vectors of bools, ints, and floats, matrixes, and
                texture samplers. These types can be aggregated into structs.
              </p>
              <ol>
                <li>
                  <h2>Void</h2> is used for an empty return type or parameter
                  list.
                </li>
                <li>
                  <h2>Booleans</h2> hold true/false values.
                </li>
                <li>
                  <h2>Integers</h2> are supported at the language level, but
                  hardware may convert them to floats if it doesn't support
                  integers.
                </li>
                <li>
                  <h2>Integers</h2> are supported at the language level, but
                  hardware may convert them to floats if it doesn't support
                  integers.
                </li>
              </ol>
            </li>
          </ol>
        </SummarizedItem>
      </ol>
    </>
  );
}
